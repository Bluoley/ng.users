export interface User {
  idUser: number;
  nameUser: string;
  firstLastNameUser: string;
  secondLastNameUser: string;
  addressUser: string;
  phoneUser: string;
}

export interface CreateOrUpdateUserInput {
  idUser?: number;
  nameUser?: string | null;
  firstLastNameUser?: string | null;
  secondLastNameUser?: string | null;
  addressUser?: string | null;
  phoneUser?: string | null;
}


export const ELEMENT_DATA: User[] = [
  { idUser: 1, nameUser: 'Blusito', firstLastNameUser: 'King', secondLastNameUser: 'West', addressUser: 'Palandia', phoneUser: '1234567890' },
  { idUser: 2, nameUser: 'John', firstLastNameUser: 'Doe', secondLastNameUser: 'Smith', addressUser: 'Springfield', phoneUser: '9876543210' },
  { idUser: 3, nameUser: 'Jane', firstLastNameUser: 'Smith', secondLastNameUser: 'Johnson', addressUser: 'Shelbyville', phoneUser: '1112223333' },
  { idUser: 4, nameUser: 'Carlos', firstLastNameUser: 'Gomez', secondLastNameUser: 'Martinez', addressUser: 'Mexico City', phoneUser: '5556667777' },
  { idUser: 5, nameUser: 'Maria', firstLastNameUser: 'Fernandez', secondLastNameUser: 'Lopez', addressUser: 'Madrid', phoneUser: '9998887777' },
  { idUser: 6, nameUser: 'Luis', firstLastNameUser: 'Perez', secondLastNameUser: 'Garcia', addressUser: 'Buenos Aires', phoneUser: '4445556666' },
  { idUser: 7, nameUser: 'Ana', firstLastNameUser: 'Torres', secondLastNameUser: 'Diaz', addressUser: 'Bogotá', phoneUser: '2223334444' },
  { idUser: 8, nameUser: 'Pedro', firstLastNameUser: 'Sanchez', secondLastNameUser: 'Ramirez', addressUser: 'Lima', phoneUser: '7778889999' },
  { idUser: 9, nameUser: 'Laura', firstLastNameUser: 'Castro', secondLastNameUser: 'Mendez', addressUser: 'Quito', phoneUser: '6665554444' },
  { idUser: 10, nameUser: 'Diego', firstLastNameUser: 'Reyes', secondLastNameUser: 'Vargas', addressUser: 'Santiago', phoneUser: '3334445555' },
  { idUser: 11, nameUser: 'Andrea', firstLastNameUser: 'Jimenez', secondLastNameUser: 'Hernandez', addressUser: 'San José', phoneUser: '1231231234' },
  { idUser: 12, nameUser: 'Pablo', firstLastNameUser: 'Ruiz', secondLastNameUser: 'Silva', addressUser: 'Guayaquil', phoneUser: '4564564567' },
  { idUser: 13, nameUser: 'Miguel', firstLastNameUser: 'Morales', secondLastNameUser: 'Guzman', addressUser: 'Cusco', phoneUser: '7897897890' },
  { idUser: 14, nameUser: 'Lucía', firstLastNameUser: 'Ortega', secondLastNameUser: 'Flores', addressUser: 'Cartagena', phoneUser: '1472583690' },
  { idUser: 15, nameUser: 'Roberto', firstLastNameUser: 'Cabrera', secondLastNameUser: 'Suarez', addressUser: 'Valparaíso', phoneUser: '2583691470' },
  { idUser: 16, nameUser: 'Isabel', firstLastNameUser: 'Molina', secondLastNameUser: 'Zamora', addressUser: 'Monterrey', phoneUser: '3691472580' },
  { idUser: 17, nameUser: 'Victor', firstLastNameUser: 'Navarro', secondLastNameUser: 'Ponce', addressUser: 'Tegucigalpa', phoneUser: '1234560987' },
  { idUser: 18, nameUser: 'Clara', firstLastNameUser: 'Ramos', secondLastNameUser: 'Peña', addressUser: 'Montevideo', phoneUser: '6543219870' },
  { idUser: 19, nameUser: 'Javier', firstLastNameUser: 'Quintero', secondLastNameUser: 'Vega', addressUser: 'Asunción', phoneUser: '7890123456' },
  { idUser: 20, nameUser: 'Daniela', firstLastNameUser: 'Soto', secondLastNameUser: 'Moreno', addressUser: 'La Paz', phoneUser: '8901234567' },
  { idUser: 21, nameUser: 'Hugo', firstLastNameUser: 'Guerrero', secondLastNameUser: 'Vargas', addressUser: 'Santa Cruz', phoneUser: '0987654321' },
  { idUser: 22, nameUser: 'Karina', firstLastNameUser: 'Bustos', secondLastNameUser: 'Navarrete', addressUser: 'San Salvador', phoneUser: '5678901234' },
  { idUser: 23, nameUser: 'Esteban', firstLastNameUser: 'Serrano', secondLastNameUser: 'Esquivel', addressUser: 'Managua', phoneUser: '3456789012' },
  { idUser: 24, nameUser: 'Gloria', firstLastNameUser: 'Varela', secondLastNameUser: 'Carranza', addressUser: 'Panama City', phoneUser: '2345678901' },
  { idUser: 25, nameUser: 'Ignacio', firstLastNameUser: 'Correa', secondLastNameUser: 'Velasco', addressUser: 'San Juan', phoneUser: '0123456789' },
  { idUser: 26, nameUser: 'Lorena', firstLastNameUser: 'Mendoza', secondLastNameUser: 'Bravo', addressUser: 'Puebla', phoneUser: '6547893210' },
  { idUser: 27, nameUser: 'Raul', firstLastNameUser: 'Alonso', secondLastNameUser: 'Rosales', addressUser: 'Mar del Plata', phoneUser: '3216549870' },
  { idUser: 28, nameUser: 'Patricia', firstLastNameUser: 'Paredes', secondLastNameUser: 'Campos', addressUser: 'Rosario', phoneUser: '7894561230' },
  { idUser: 29, nameUser: 'Ricardo', firstLastNameUser: 'León', secondLastNameUser: 'Montes', addressUser: 'Tijuana', phoneUser: '1237894560' },
  { idUser: 30, nameUser: 'Cecilia', firstLastNameUser: 'Núñez', secondLastNameUser: 'Palacios', addressUser: 'Montevista', phoneUser: '1473692580' },
  { idUser: 31, nameUser: 'Alfredo', firstLastNameUser: 'Figueroa', secondLastNameUser: 'Valdez', addressUser: 'Cartago', phoneUser: '2581473690' },
  { idUser: 32, nameUser: 'Diana', firstLastNameUser: 'Espinoza', secondLastNameUser: 'Rico', addressUser: 'Toluca', phoneUser: '3692581470' },
  { idUser: 33, nameUser: 'Oscar', firstLastNameUser: 'Salazar', secondLastNameUser: 'Santana', addressUser: 'Punta Arenas', phoneUser: '1230984567' },
  { idUser: 34, nameUser: 'Verónica', firstLastNameUser: 'Guzmán', secondLastNameUser: 'Arellano', addressUser: 'San Miguel', phoneUser: '4567891230' },
  { idUser: 35, nameUser: 'Samuel', firstLastNameUser: 'Cardenas', secondLastNameUser: 'Delgado', addressUser: 'Chiclayo', phoneUser: '7891234560' },
  { idUser: 36, nameUser: 'Elena', firstLastNameUser: 'Ibarra', secondLastNameUser: 'Mejía', addressUser: 'Cancún', phoneUser: '3217894560' },
  { idUser: 37, nameUser: 'Felipe', firstLastNameUser: 'Romero', secondLastNameUser: 'Bermudez', addressUser: 'Arequipa', phoneUser: '9876543210' },
  { idUser: 38, nameUser: 'Sara', firstLastNameUser: 'Villanueva', secondLastNameUser: 'Benitez', addressUser: 'Cuscatlán', phoneUser: '3456780987' },
  { idUser: 39, nameUser: 'Mauricio', firstLastNameUser: 'Luna', secondLastNameUser: 'Alarcón', addressUser: 'Manizales', phoneUser: '5671238901' },
  { idUser: 40, nameUser: 'Paola', firstLastNameUser: 'Benavides', secondLastNameUser: 'Padilla', addressUser: 'Florencia', phoneUser: '0987123456' },
];
