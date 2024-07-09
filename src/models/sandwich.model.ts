export interface Relleno {
  lechuga: boolean;
  carne: boolean;
  pepinillo: boolean;
  mostaza: boolean;
  mayonesa: boolean;
}

export enum Panes {
  "LACTAL" = "lactal",
  "SEMILLAS" = "semillas",
}

export interface Ingredientes {
  relleno: Relleno;
  pan: Panes;
}
