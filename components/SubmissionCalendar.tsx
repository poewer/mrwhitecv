"use client";
import { useEffect, useState } from "react";

type SubmissionData = {
  [timestamp: string]: number;
};

type CalendarDay = {
  date: Date;
  count: number;
  isEmpty?: boolean;
};

interface UserCalendar {
  streak: number;
  totalActiveDays: number;
  submissionCalendar: string; // JSON string
}

interface ApiResponse {
  data: {
    matchedUser: {
      username: string;
      userCalendar: UserCalendar;
    };
  };
}

const getColor = (count: number, isEmpty = false) => {
  if (isEmpty) return "bg-gray-50";
  if (count === 0) return "bg-gray-100";
  if (count < 5) return "bg-green-200";
  if (count < 15) return "bg-green-400";
  if (count < 25) return "bg-green-600";
  return "bg-green-800";
};

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const dayNames = ["", "Mon", "", "Wed", "", "Fri", ""];

export default function SubmissionCalendar({ username }: { username: string }) {
  const [calendar, setCalendar] = useState<CalendarDay[][]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<{ streak: number; totalActiveDays: number; totalSubmissions: number }>({
    streak: 0,
    totalActiveDays: 0,
    totalSubmissions: 0,
  });
  const [monthPositions, setMonthPositions] = useState<{ month: string; position: number }[]>([]);

  console.log('Component initialized with username:', username);

  useEffect(() => {
    console.log('useEffect triggered with username:', username);
    
    if (!username) {
      console.log('No username provided');
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      console.log('Starting fetch for username:', username);
      setLoading(true);
      setError(null);
      
      try {
        const apiUrl = `/api/leetcode?username=${username}&year=${new Date().getFullYear()}`;
        console.log('Fetching from:', apiUrl);
        
        const res = await fetch(apiUrl);
        console.log('Response status:', res.status, res.statusText);
        
        if (!res.ok) {
          const errorText = await res.text();
          console.error('API Error:', errorText);
          throw new Error(`HTTP ${res.status}: ${errorText}`);
        }

        const data: ApiResponse = await res.json();
        console.log('API Response:', data);
        
        if (!data.data?.matchedUser?.userCalendar) {
          throw new Error('Invalid API response structure');
        }
        
        const cal = data.data.matchedUser.userCalendar;
        console.log('User calendar:', cal);
        
        const parsed: SubmissionData = JSON.parse(cal.submissionCalendar);
        console.log('Parsed calendar data (timestamps):', Object.keys(parsed).length, 'entries');

        // Konwertujemy timestamps na daty i tworzymy mapę
        const allData: { [dateStr: string]: number } = {};
        const allDatesWithData: Date[] = [];
        
        Object.entries(parsed).forEach(([ts, count]) => {
          const date = new Date(parseInt(ts) * 1000);
          const dateStr = date.toDateString();
          allData[dateStr] = count;
          allDatesWithData.push(date);
        });

        console.log('Date range in data:', {
          earliest: new Date(Math.min(...allDatesWithData.map(d => d.getTime()))).toDateString(),
          latest: new Date(Math.max(...allDatesWithData.map(d => d.getTime()))).toDateString(),
          totalEntries: Object.keys(allData).length
        });

        // Zakres: ostatnie 365 dni od dzisiaj
        const endDate = new Date();
        endDate.setHours(23, 59, 59, 999); // Koniec dnia
        const startDate = new Date(endDate);
        startDate.setFullYear(startDate.getFullYear() - 1);
        startDate.setDate(startDate.getDate() + 1); // +1 dzień, żeby mieć dokładnie 365 dni
        startDate.setHours(0, 0, 0, 0); // Początek dnia

        console.log('Calendar range:', {
          start: startDate.toDateString(),
          end: endDate.toDateString()
        });

        // Obliczamy totalSubmissions i totalActiveDays dla ostatnich 365 dni
        let totalSubmissions = 0;
        let totalActiveDays = 0;
        
        Object.entries(allData).forEach(([dateStr, count]) => {
          const date = new Date(dateStr);
          if (date >= startDate && date <= endDate) {
            totalSubmissions += count;
            if (count > 0) totalActiveDays++;
          }
        });

        // Używamy streak z API lub obliczamy własny dla ostatnich 365 dni
        const maxStreak = cal.streak;

        // Budowanie kalendarza
        const firstSunday = new Date(startDate);
        firstSunday.setDate(firstSunday.getDate() - firstSunday.getDay());

        const weeks: CalendarDay[][] = [];
        const monthPos: { month: string; position: number }[] = [];
        let currentWeek: CalendarDay[] = [];
        let weekCount = 0;
        let lastMonth = -1;
        const currentDate = new Date(firstSunday);

        while (currentDate <= endDate || currentWeek.length > 0) {
          if (currentWeek.length === 7) {
            weeks.push([...currentWeek]);
            currentWeek = [];
            weekCount++;
          }

          if (currentDate > endDate) {
            // Wypełniamy ostatni tydzień pustymi dniami
            while (currentWeek.length < 7) {
              currentWeek.push({
                date: new Date(currentDate),
                count: 0,
                isEmpty: true,
              });
              currentDate.setDate(currentDate.getDate() + 1);
            }
            continue;
          }

          const dateStr = currentDate.toDateString();
          const count = allData[dateStr] || 0;
          const isEmpty = currentDate < startDate;

          // Śledzimy pozycje miesięcy
          if (currentDate.getMonth() !== lastMonth && currentDate.getDay() === 0 && currentDate >= startDate) {
            monthPos.push({
              month: monthNames[currentDate.getMonth()],
              position: weekCount,
            });
            lastMonth = currentDate.getMonth();
          }

          currentWeek.push({
            date: new Date(currentDate),
            count,
            isEmpty,
          });

          currentDate.setDate(currentDate.getDate() + 1);
        }

        if (currentWeek.length > 0) {
          weeks.push(currentWeek);
        }

        console.log('Calculated stats:', { 
          totalSubmissions, 
          totalActiveDays, 
          streak: maxStreak,
          dataPointsInRange: Object.keys(allData).filter(dateStr => {
            const date = new Date(dateStr);
            return date >= startDate && date <= endDate;
          }).length
        });

        console.log('About to set calendar state...');
        setCalendar(weeks);
        setMeta({ 
          streak: maxStreak, 
          totalActiveDays, 
          totalSubmissions 
        });
        setMonthPositions(monthPos);
        console.log('State updated successfully');
        
      } catch (err) {
        console.error('Error in fetchData:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        console.log('Setting loading to false');
        setLoading(false);
      }
    };

    fetchData();
  }, [username]); // Tylko username w dependencies

  console.log('Component render state:', { loading, error, calendarLength: calendar.length, username });

  if (loading) {
    return (
      <div className="p-6 bg-white rounded-lg border">
        <div className="flex items-center justify-center h-32">
          <div className="text-gray-500">Loading calendar data for {username}...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-white rounded-lg border">
        <div className="text-red-500">
          <h3 className="font-semibold mb-2">Error loading calendar</h3>
          <p className="text-sm">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-sm"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (calendar.length === 0) {
    return (
      <div className="p-6 bg-white rounded-lg border">
        <div className="text-gray-500">
          No calendar data available for {username}
          <br />
          <small>Check console for debug information</small>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">
          {meta.totalSubmissions} submissions in the past one year
        </h2>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <span>Total active days: {meta.totalActiveDays}</span>
          <span>Max streak: {meta.streak}</span>
        </div>
      </div>

      <div className="relative">
        {/* Month labels */}
        <div className="flex mb-2">
          {monthPositions.map((month, idx) => (
            <div
              key={idx}
              className="text-xs text-gray-600"
              style={{
                marginLeft:
                  idx === 0
                    ? `${month.position * 12}px`
                    : `${(month.position - monthPositions[idx - 1].position) * 12 - 20}px`,
                minWidth: "20px",
              }}
            >
              {month.month}
            </div>
          ))}
        </div>

        <div className="flex">
          {/* Day labels */}
          <div className="flex flex-col mr-2">
            {dayNames.map((day, idx) => (
              <div
                key={idx}
                className="h-3 text-xs text-gray-600 flex items-center mb-0.5"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="flex gap-0.5">
            {calendar.map((week, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-0.5">
                {week.map((day, dayIdx) => (
                  <div
                    key={`${weekIdx}-${dayIdx}`}
                    className={`w-3 h-3 rounded-sm border border-gray-200 ${getColor(
                      day.count,
                      day.isEmpty
                    )}`}
                    title={
                      day.isEmpty
                        ? ""
                        : `${day.count} submissions on ${day.date.toLocaleDateString()}`
                    }
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-gray-600">
            Learn how we count contributions
          </span>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-600 mr-2">Less</span>
            {[0, 1, 5, 15, 25].map((threshold, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-sm border border-gray-200 ${getColor(
                  threshold
                )}`}
              />
            ))}
            <span className="text-xs text-gray-600 ml-2">More</span>
          </div>
        </div>
      </div>
    </div>
  );
}