export async function getUsers() {
    const response = await fetch("https://vue-neva.nevameiy.workers.dev/api/pelanggan");
    return await response.json();
  }