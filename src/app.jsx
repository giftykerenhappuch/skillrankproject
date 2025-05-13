import React, { useState } from 'react';
import EventForm from './components/EventForm';
import GiftForm from './components/GiftForm';
import BudgetBar from './components/BudgetBar';
import EventCard from './components/EventCard';

const App = () => {
  const [events, setEvents] = useState([]);
  const [budget, setBudget] = useState(0);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const addGift = (eventId, gift) => {
    setEvents(events.map(event =>
      event.id === eventId
        ? { ...event, gifts: [...event.gifts, gift] }
        : event
    ));
  };

  const toggleGiftStatus = (eventId, giftId, key) => {
    setEvents(events.map(event => {
      if (event.id === eventId) {
        const updatedGifts = event.gifts.map(gift =>
          gift.id === giftId ? { ...gift, [key]: !gift[key] } : gift
        );
        return { ...event, gifts: updatedGifts };
      }
      return event;
    }));
  };

  const totalSpent = events.reduce((total, event) =>
    total + event.gifts.reduce((sum, gift) => sum + gift.cost, 0), 0
  );

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-pink-50 to-blue-100">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">🎁 Gift Planner & Budget Tracker</h1>

        <BudgetBar total={budget} spent={totalSpent} setBudget={setBudget} />

        <EventForm addEvent={addEvent} />

        <GiftForm events={events} addGift={addGift} />

        <div className="mt-8 space-y-4">
          {events.map(event => (
            <EventCard
              key={event.id}
              event={event}
              toggleGiftStatus={toggleGiftStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
