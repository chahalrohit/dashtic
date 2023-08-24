import users1 from "../../../../assets/images/users/1.jpg";
import users2 from "../../../../assets/images/users/2.jpg";
import users3 from "../../../../assets/images/users/3.jpg";
import users4 from "../../../../assets/images/users/4.jpg";
import users5 from "../../../../assets/images/users/5.jpg";
import users6 from "../../../../assets/images/users/6.jpg";
import users7 from "../../../../assets/images/users/7.jpg";
import users8 from "../../../../assets/images/users/8.jpg";
import users9 from "../../../../assets/images/users/9.jpg";
import users10 from "../../../../assets/images/users/10.jpg";

export interface SData {
  Name: string
  work: string
  task: string
  bg: string
  star: string
  photo: string
}

export const data: SData[] = [
  {
    Name: "Shamika Griffith",
    work: " Work Assigned By Clients",
    task: "New",
    bg:"badge bg-light rounded-pill",
   star:"fa fa-star",
    photo: users1,
  },
  {
      Name: " Archie Kesler",
    work: "  Try To Get New Work",
    task: " Completed",
    bg:"badge bg-success rounded-pill",
   star:"fa fa-star text-warning",
    photo: users2,
  },
  {
      Name: " Carolyne Wirtz",
    work: " Rationally Encounter Quences",
    task: "New",
    bg:"badge bg-light rounded-pill",
   star:"fa fa-star ",
    photo: users3,
  },
  {
      Name: " Consuelo Valenzuela",
    work: "  Which Of Us Ever Undertakes",
    task: " Completed",
    bg:"badge bg-success rounded-pill",
   star:"fa fa-star",
    photo: users4,
  },
  {
      Name: " Myrta Powe",
    work: "  Quis Autem Vel Eum Iure",
    task: "New",
    bg:"badge bg-light rounded-pill",
   star:"fa fa-star ",
    photo: users5,
  },
  {
      Name: "Margarette Wycoff",
    work: "  Ut Enim Ad Minima Veniam",
    task: " pending",
    bg:"badge bg-secondary rounded-pill",
   star:"fa fa-star",
    photo: users6,
  },
  {
      Name: " Veronica Kimery",
    work: "  Inventore Veritatis Et Quasi",
    task: " Completed",
    bg:"badge bg-success rounded-pill",
   star:"fa fa-star text-warning",
    photo: users7,
  },
  {
      Name: " Raisa Ladwig",
    work: "  Vero Eos Et Accusamus Et Iusto",
    task: "New",
    bg:"badge bg-light rounded-pill",
   star:"fa fa-star",
    photo: users8,
  },
  {
      Name: " Kathaleen Roysden",
    work: "  Which Of Us Ever Undertakes",
    task: " pending",
    bg:"badge bg-secondary rounded-pill",
   star:"fa fa-star text-warning",
    photo: users9,
  },
  {
      Name: " Elizabeth Loux",
    work: "  Account Of The System",
    task: "New",
    bg:"badge bg-light rounded-pill",
   star:"fa fa-star ",
    photo: users10,
  },
];
