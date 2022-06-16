/* eslint-disable @typescript-eslint/no-explicit-any */

export type INav = {
  label: { [key: string]: string }
  target: string
  addr: string
};

export type IGlobal = {
  nav: INav[]
};

export type IMicrofrontend = {
  nav: INav[]
  [key: string]: any
};

export type IBundle = {
  name: string
  pbcName: string
  description: string
  global: IGlobal
  microfrontends: IMicrofrontend[]
};
