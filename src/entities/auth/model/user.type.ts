export interface User {
  email: string;
  name: string;
  profile?: string;
}

export interface AuthCheckResponse {
  authenticated: boolean;
  user?: {
    id: number;
    role: string;
  };
  reason?: string;
}
