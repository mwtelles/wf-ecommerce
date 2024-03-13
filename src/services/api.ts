class Api {
  private static BASE_URL = 'http://localhost:3001';

  public static async get<T>(url: string): Promise<{ data: T, status: number }> {
    try {
      const response = await fetch(`${Api.BASE_URL}${url}`);
      const data = await response.json();
      return { data, status: response.status };
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      throw new Error('Erro ao buscar dados');
    }
  }
}

export default Api;