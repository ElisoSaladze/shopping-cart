type Method = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'

export const request =
  (method: Method) =>
  async <T>(path: string, body?: Record<string, any>): Promise<T> => {
    const result = await fetch(path, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await result.json()
    return data as T
  }

export const get = request('GET')
export const post = request('POST')
export const put = request('PUT')
export const patch = request('PATCH')
export const del = request('DELETE')
