const eer_rooms = {
  "EER 0.824": { floor: 0, start_time: 8, end_time: 20 },
  "EER 1.518": { floor: 1, start_time: 9, end_time: 22 },
  "EER 2.608": { floor: 2, start_time: 10, end_time: 17 },
  "EER 3.630": { floor: 3, start_time: 13, end_time: 23 },
  "EER 4.714": { floor: 4, start_time: 8, end_time: 18 },
};

function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = `Current time: ${now.toLocaleTimeString()}`;
  setTimeout(updateClock, 1000);
}

function checkRooms() {
  const hour = parseInt(document.getElementById("hour").value);
  const floorText = document.getElementById("floor").value;
  const floor = floorText === "All Floors" ? null : parseInt(floorText.split(" ")[1]);

  let available = [];

  for (let room in eer_rooms) {
    const { floor: roomFloor, start_time, end_time } = eer_rooms[room];
    if (start_time <= hour && hour < end_time) {
      if (floor === null || floor === roomFloor) {
        available.push(`${room} (${start_time}:00–${end_time}:00)`);
      }
    }
  }

  const result = document.getElementById("result");
  if (available.length > 0) {
    result.textContent = `✅ Rooms available at ${hour}:00 on ${floorText}:\n\n${available.join("\n")}`;
  } else {
    result.textContent = `❌ No rooms available at ${hour}:00 on ${floorText}.`;
  }
}

updateClock();
