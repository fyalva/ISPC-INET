// src/app/models/province.ts

export interface Province {
    id_provincia: number;
    nombre: string;
    localidades: Locality[];
  }
  
  export interface Locality {
    id_localidad: number;
    nombre: string;
    schools: School[]; 
  }
  

  
  export interface School {
    id: number;
    name: string;
    adress: string;
    province: Province; 
    locality: Locality; 
  }