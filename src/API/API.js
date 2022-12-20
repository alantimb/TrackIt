import axios from "axios";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signUp(body) {
  const promise = axios.post(
    `https://mock-api.driven.com.br/api/v2/trackit/auth/sign-up`,
    body
  );

  return promise;
}

function login(body) {
  const promise = axios.post(
    `https://mock-api.driven.com.br/api/v2/trackit/auth/login`,
    body
  );

  return promise;
}

function createHabit(body, token) {
  const config = createConfig(token);

  const promise = axios.post(
    `https://mock-api.driven.com.br/api/v2/trackit/habits`,
    body,
    config
  );

  return promise;
}

function listOfHabits(token) {
  const config = createConfig(token);

  const promise = axios.get(
    `https://mock-api.driven.com.br/api/v2/trackit/habits`,
    config
  );

  return promise;
}

function deleteHabit(id, token) {
  const config = createConfig(token);

  const promise = axios.delete(
    `https://mock-api.driven.com.br/api/v2/trackit/habits/${id}`,
    config
  );

  return promise;
}

function todayHabits(token) {
  const config = createConfig(token);

  const promise = axios.get(
    `https://mock-api.driven.com.br/api/v2/trackit/habits/today`,
    config
  );

  return promise;
}

function markHabit(id, token) {
  const config = createConfig(token);

  const promise = axios.post(
    `https://mock-api.driven.com.br/api/v2/trackit/habits/${id}/check`,
    null,
    config
  );

  return promise;
}

function unmarkHabit(id, token) {
  const config = createConfig(token);

  const promise = axios.post(
    `https://mock-api.driven.com.br/api/v2/trackit/habits/${id}/uncheck`,
    null,
    config
  );

  return promise;
}

function dailyHabitsHistory(token) {
  const config = createConfig(token);

  const promise = axios.get(
    `https://mock-api.driven.com.br/api/v2/trackit/habits/history/daily`,
    config
  );

  return promise;
}

const API = {
  signUp,
  login,
  createHabit,
  listOfHabits,
  deleteHabit,
  todayHabits,
  markHabit,
  unmarkHabit,
  dailyHabitsHistory,
};

export default API;
