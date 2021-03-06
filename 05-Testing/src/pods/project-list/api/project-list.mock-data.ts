import { Project } from "./project-list.api-model";

export const mockProjectList: Project[] = [
  {
    id: "1",
    isActive: true,
    code: "23212",
    name: "Bankia",
    lastDateIncurred: "02/02/2020",
    creationDate: "01/08/2018"
  },
  {
    id: "2",
    isActive: true,
    code: "4323",
    name: "Mapfre",
    lastDateIncurred: "05/02/2020",
    creationDate: "01/04/2018"
  },
  {
    id: "3",
    isActive: true,
    code: "002",
    name: "Vacaciones",
    lastDateIncurred: "05/02/2020",
    creationDate: "01/04/2018"
  },
  {
    id: "4",
    isActive: true,
    code: "003",
    name: "Baja Médica",
    lastDateIncurred: "05/03/2018",
    creationDate: "01/05/2019"
  },
  {
    id: "5",
    isActive: false,
    code: "2586",
    name: "Proyecto interno",
    lastDateIncurred: "05/08/2020",
    creationDate: "01/10/2018"
  },
  {
    id: "6",
    isActive: false,
    code: "3025",
    name: "BBVA",
    lastDateIncurred: "06/05/2020",
    creationDate: "01/03/2019"
  },
  {
    id: "7",
    isActive: false,
    code: "8563",
    name: "Baja Médica",
    lastDateIncurred: "02/08/2018",
    creationDate: "01/11/2020"
  },
  {
    id: "8",
    isActive: true,
    code: "4125",
    name: "Microsoft España",
    lastDateIncurred: "11/10/2018",
    creationDate: "01/07/2020"
  }
];
