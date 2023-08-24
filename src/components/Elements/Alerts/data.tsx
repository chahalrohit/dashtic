export interface data1 {
    id: string;
    color: string;
    text: string;
    show: string
}

export const initialList: data1[] =[
    {
        id:"1",
color:"success",
text: "alert—At vero eos et accusamus praesentium!",
show:" Success"
    },
    {
        id:"2",
color:"info",
text: "alert—At vero eos et accusamus praesentium!",
show:" Info"
    },
    {
        id:"3",
color:"warning",
text: "alert—At vero eos et accusamus praesentium!",
show:"Warning"
    },
    {
        id:"4",
color:"danger",
text: "alert—At vero eos et accusamus praesentium!",
show:"Danger"
    },
]


export const LinkData =[
    {
        id:"21",
class:"alert alert-success",
color:"success",
text: "You successfully read",
show:"Well done!",
linktext:" this important alert message.",
text2:""
    },
    {
        id:"22",
class:"alert alert-info",
color:"info",
text: "This",
show:"Heads up!",
linktext:" alert needs your attention,",
text2:" but it's not super important."
    },
    {
        id:"23",
class:"alert alert-warning",
color:"warning",
text: "Better check yourself, you're",
show:"Warning! ",
linktext:" not looking too good.",
text2:""
    },
    {
id:"24",
class:"alert alert-danger",
color:"danger",
text: "",
show:"Oh snap!",
linktext:" Change a few things up",
text2:" and try submitting again."
    },
]


export const AlertsStyle =[
    {
        id:"11",
        color:"success",
        class:"alert alert-success",
        show:"Success Message",
        text:"You successfully read this important alert message."
    },
    {
        id:"12",
        color:"info",
        class:"alert alert-info",
        show:"Info Message",
        text:"This alert needs your attention, but it's not super important."
    },
    {
        id:"13",
        color:"warning",
        class:"alert alert-warning",
        show:"Warning Message",
        text:"Best check yo self, you're not looking too good."
    },
    {
        id:"14",
        color:"danger",
        class:"alert alert-danger",
        show:"Danger Message",
        text:"Change a few things up and try submitting again."
    },
]


export const Alerticon = [
    {
        id:"31",
        color:"success",
        class:"alert alert-success",
        icon:"fa fa-check-circle-o me-2",
        text:" Well done! You successfully read this important alert message."
    },
    {
        id:"32",
        color:"info",
        class:"alert alert-info",
        icon:"fa fa-bell-o me-2",
        text:"Heads up! This alert needs your attention, but it's not super important."
    },
    {
        id:"33",
        color:"warning",
        class:"alert alert-warning",
        icon:"fa fa-exclamation me-2",
        text:"Warning! Better check yourself, you're not looking too good."
    },
    {
        id:"34",
        color:"danger",
        class:"alert alert-danger",
        icon:"fa fa-frown-o me-2",
        text:"Oh snap!Change a few things up and try submitting again."
    },

]