import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    button?: string;
    "button-text"?: string;
  }
}

export {};
