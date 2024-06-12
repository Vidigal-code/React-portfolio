// global.d.ts

declare namespace NodeJS {
    interface Timeout {
      ref(): void;
      unref(): void;
    }
  }
  