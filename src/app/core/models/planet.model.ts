export interface Planet {
  pl_name: string;
  hostname: string;
  disc_year: number;
  discoverymethod: string;
  pl_orbper: number | null;
  sy_dist: number | null;
}

type PlanetColumn = keyof Planet;

export const PLANET_COLUMNS = [
  'pl_name',
  'hostname',
  'disc_year',
  'discoverymethod',
  'pl_orbper',
  'sy_dist',
] as const satisfies readonly PlanetColumn[];
