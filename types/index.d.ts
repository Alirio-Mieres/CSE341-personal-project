export {};

declare global {
  namespace Express {
    interface Request {
      user: {
        uid: string;
        role: string;
        firstName: string;
      };
    }
  }
}
