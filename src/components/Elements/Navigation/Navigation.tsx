import React, { LegacyRef, useRef, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Nav,
  NavItem,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown,
  NavLink,
  Row,
} from "reactstrap";
import { PageHeaders } from "../../../Shared/Prism/Prism";

const Navigation = () => {

      //clipboard functions
      const elementRef: LegacyRef<HTMLPreElement>  = useRef <HTMLInputElement>(null)
      const elementRef2: LegacyRef<HTMLPreElement>  = useRef <HTMLInputElement>(null)
      const elementRef3: LegacyRef<HTMLPreElement>  = useRef <HTMLInputElement>(null)
      const elementRef4: LegacyRef<HTMLPreElement>  = useRef <HTMLInputElement>(null)
      const elementRef5: LegacyRef<HTMLPreElement>  = useRef <HTMLInputElement>(null)
      const elementRef6: LegacyRef<HTMLPreElement>  = useRef <HTMLInputElement>(null)

            //clipboard function for ShowCode
  
  let CopytoClipBoard =(ele: { current?: HTMLElement | null })=>{
    let data = ele.current?.innerText
    navigator.clipboard.writeText(data || '')
    alert("Text copied successfully")
    }
    //classlist adding for icon navigation
    // document.querySelector('nav-link')?.classList.add('active');



  let [Navitems, setNavitems] = useState([
    {
      link : "home",
      icon : `fe fe-home`,
      active : true,
      id : 1
    },
    {
      link : "Lock",
      icon : `fe fe-unlock`,
      active : false,
      id : 2

    },
    {
      link : "Videos",
      icon : `fe fe-play`,
      active : false,
      id : 3

    },
    {
      link : "Servers",
      icon : `fe fe-layers`,
      active : false,
      id : 4

    },
    {
      link : "Gallery",
      icon : `fe fe-image`,
      active : false,
      id : 5

    },
  ])

  let HandelChange = (id: number) => {
    let i = Navitems.map((element) =>{
      let output 
      if(id === element.id){
        output = element
        output.active = true
      }
      else{
        output = element
        output.active = false
      }
      return output
    })
    setNavitems(i);
  }

  return(

  <div>
    <PageHeaders
      title="Navigation"
      home="Home"
      name="Elements"
      fonticonsname="Navigation"
    />

    <Row>
      <Col className="col-12">
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Basic Nav</CardTitle>
          </CardHeader>
          <CardBody>
            <Nav className="nav1 br-7">
              <NavItem className="nav-item1">
                <NavLink
                  className="nav-link "
                  active
                  aria-current="page"
                  href="#"
                >
                  Active
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link " disabled href="#">
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
          </CardBody>
          {/* <!---Prism Pre code--> */}
          <div className="html-code">
            <svg
              className="svg-icon me-2"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>{" "}
            Show Code{" "}
          </div>
          <figure className="highlight mb-0" id="element1">
            <pre ref={elementRef}>
              <code className="language-markup mb-0">{`
    <Nav className="nav1 br-7">
    <NavItem className="nav-item1">
      <NavLink
        className="nav-link "
        active
        aria-current="page"
        href="#"
      >
        Active
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" href="#">
        Link
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" href="#">
        Link
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link " disabled href="#">
        Disabled
      </NavLink>
    </NavItem>
              </Nav>
              `}</code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element1">
              <svg
              onClick={()=>{
                CopytoClipBoard(elementRef)
            }}
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M14 7H8v14h11v-9h-5z" opacity=".3" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" />
              </svg>
            </div>
          </figure>
          {/* <!---Prism Pre code--> */}
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Nav Vertical</CardTitle>
          </CardHeader>
          <CardBody>
            <Nav vertical className="nav1 flex-column br-7">
              <NavItem className="nav-item1">
                <NavLink
                  className="nav-link"
                  active
                  aria-current="page"
                  href="#"
                >
                  Active
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link" disabled href="#">
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
          </CardBody>
          {/* <!---Prism Pre code--> */}
          <div className="html-code">
            <svg
              className="svg-icon me-2"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>{" "}
            Show Code{" "}
          </div>
          <figure className="highlight mb-0" id="element2">
            <pre ref={elementRef2}>
              <code className="language-markup mb-0">{`
    <Nav vertical className="nav1 flex-column br-7">
    <NavItem className="nav-item1">
      <NavLink
        className="nav-link"
        active
        aria-current="page"
        href="#"
      >
        Active
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" href="#">
        Link
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" href="#">
        Link
      </NavLink>
    </NavItem>
    <NavItem className="nav-item1">
      <NavLink className="nav-link" disabled href="#">
        Disabled
      </NavLink>
    </NavItem>
    </Nav>
              `} </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element2">
              <svg
              onClick={()=>{
                CopytoClipBoard(elementRef2)
            }}
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M14 7H8v14h11v-9h-5z" opacity=".3" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" />
              </svg>
            </div>
          </figure>
          {/* <!---Prism Pre code--> */}
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Color Navigation</CardTitle>
          </CardHeader>
          <CardBody>
            <Nav pills className="nav nav-pills">
              <NavItem className="nav-item m-2">
                <NavLink className="nav-link  px-4 py-2" active href="#">
                  Active
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav className="nav-item dropdown m-2">
                <DropdownToggle
                  color=""
                  className="nav-link dropdown-toggle px-4 py-2"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Dropdown
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu">
                  <DropdownItem className="dropdown-item" href="#">
                    Action
                  </DropdownItem>
                  <DropdownItem className="dropdown-item" href="#">
                    Another action
                  </DropdownItem>
                  <DropdownItem className="dropdown-item" href="#">
                    Something else here
                  </DropdownItem>
                  <DropdownItem divider></DropdownItem>
                  <DropdownItem className="dropdown-item" href="#">
                    Separated link
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="nav-item m-2">
                <NavLink className="nav-link px-4 py-2" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item m-2">
                <NavLink className="nav-link  px-4 py-2" disabled href="#">
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
          </CardBody>
          {/* <!---Prism Pre code--> */}
          <div className="html-code">
            <svg
              className="svg-icon me-2"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>{" "}
            Show Code{" "}
          </div>
          <figure className="highlight mb-0" id="element3">
            <pre ref={elementRef3}>
              <code className="language-markup mb-0">{`
     <Nav pills className="nav nav-pills">
     <NavItem className="nav-item m-2">
       <NavLink className="nav-link  px-4 py-2" active href="#">
         Active
       </NavLink>
     </NavItem>
     <UncontrolledDropdown nav className="nav-item dropdown m-2">
       <DropdownToggle
         color=""
         className="nav-link dropdown-toggle px-4 py-2"
         data-bs-toggle="dropdown"
         role="button"
         aria-expanded="false"
       >
         Dropdown
       </DropdownToggle>
       <DropdownMenu className="dropdown-menu">
         <DropdownItem className="dropdown-item" href="#">
           Action
         </DropdownItem>
         <DropdownItem className="dropdown-item" href="#">
           Another action
         </DropdownItem>
         <DropdownItem className="dropdown-item" href="#">
           Something else here
         </DropdownItem>
         <DropdownItem divider></DropdownItem>
         <DropdownItem className="dropdown-item" href="#">
           Separated link
         </DropdownItem>
       </DropdownMenu>
     </UncontrolledDropdown>
     <NavItem className="nav-item m-2">
       <NavLink className="nav-link px-4 py-2" href="#">
         Link
       </NavLink>
     </NavItem>
     <NavItem className="nav-item m-2">
       <NavLink className="nav-link  px-4 py-2" disabled href="#">
         Disabled
       </NavLink>
     </NavItem>
   </Nav>
   `}</code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element3">
              <svg
              onClick={()=>{
                CopytoClipBoard(elementRef3)
            }}
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M14 7H8v14h11v-9h-5z" opacity=".3" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" />
              </svg>
            </div>
          </figure>
          {/* <!---Prism Pre code--> */}
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Icon Navigation</CardTitle>
          </CardHeader>
          <CardBody>
          <Nav tabs pills className="nav-pills-circle">
                  {Navitems.map((ele)=>(
                  <NavItem key={Math.random()}>
                    <NavLink onClick={()=>{HandelChange(ele.id)}} href="#" className={`border py-3 px-5 m-2 ${ele.active ? 'active' : ''}`}>
                    <span className="activeFunction nav-link-icon d-block"> 
                    <i className={`${ele.icon}`}></i> {ele.link}</span></NavLink>
                  </NavItem>
                  ))}
              </Nav>
          </CardBody>
          {/* <!---Prism Pre code--> */}
          <div className="html-code">
            <svg
              className="svg-icon me-2"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>{" "}
            Show Code{" "}
          </div>
          <figure className="highlight mb-0" id="element5">
            <pre ref={elementRef4}>
              <code className="language-markup mb-0">{`
    <Nav tabs pills className="nav-pills-circle">
    <NavItem>
      <NavLink href="#" className="border py-3 px-5 m-2" active><span className="nav-link-icon d-block"> <i className="fe fe-home"></i> Home</span></NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#" className="border py-3 px-5 m-2"><span className="nav-link-icon d-block"><i className="fe fe-unlock"></i> Lock{" "}</span></NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#" className="border py-3 px-5 m-2"><span className="nav-link-icon d-block"><i className="fe fe-play"></i> Videos</span></NavLink>  
    </NavItem>
    <NavItem>
      <NavLink  href="#" className="border py-3 px-5 m-2"><span className="nav-link-icon d-block"><i className="fe fe-layers"></i> Servers</span></NavLink>
    </NavItem>
    <NavItem>
      <NavLink  href="#" className="border py-3 px-5 m-2"><span className="nav-link-icon d-block"><i className="fe fe-image"></i> Gallery{" "}</span></NavLink>
    </NavItem>
  </Nav>`}
    </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element5">
              <svg
              onClick={()=>{
                CopytoClipBoard(elementRef4)
            }}
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M14 7H8v14h11v-9h-5z" opacity=".3" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" />
              </svg>
            </div>
          </figure>
          {/* <!---Prism Pre code--> */}
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Icon Nav Bar</CardTitle>
          </CardHeader>
          <CardBody>
          <Nav tabs pills className="nav-pills-circle">
                <NavItem>
                  <NavLink href="#" className="border w-8 h-8 text-center br-100 m-2 p-3" active><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-home fs-20"></i></span></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className="border w-8 h-8 text-center br-100 m-2 p-3"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-unlock fs-20"></i> </span></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className="border w-8 h-8 text-center br-100 m-2 p-3"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-play fs-20"></i></span></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink  href="#" className="border w-8 h-8 text-center br-100 m-2 p-3"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-layers fs-20"></i></span></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink  href="#" className="border w-8 h-8 text-center br-100 m-2 p-3"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-image fs-20"></i>{" "}</span></NavLink>
                </NavItem>
              </Nav>
          </CardBody>
          {/* <!---Prism Pre code--> */}
          <div className="html-code">
            <svg
              className="svg-icon me-2"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>{" "}
            Show Code{" "}
          </div>
          <figure className="highlight mb-0" id="element6">
            <pre ref={elementRef5}>
              <code className="language-markup mb-0">{`
                 <Nav tabs pills className="nav-pills-circle">
                 <NavItem>
                   <NavLink href="#" className="border w-8 h-8 text-center br-100 m-2" active><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-home fs-20"></i></span></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="#" className="border w-8 h-8 text-center br-100 m-2"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-unlock fs-20"></i> </span></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink href="#" className="border w-8 h-8 text-center br-100 m-2"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-play fs-20"></i></span></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink  href="#" className="border w-8 h-8 text-center br-100 m-2"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-layers fs-20"></i></span></NavLink>
                 </NavItem>
                 <NavItem>
                   <NavLink  href="#" className="border w-8 h-8 text-center br-100 m-2"><span className="nav-link-icon d-block text-center mx-auto"><i className="fe fe-image fs-20"></i>{" "}</span></NavLink>
                 </NavItem>
               </Nav>
`}
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element6">
              <svg
              onClick={()=>{
                CopytoClipBoard(elementRef5)
            }}
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M14 7H8v14h11v-9h-5z" opacity=".3" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" />
              </svg>
            </div>
          </figure>
          {/* <!---Prism Pre code--> */}
        </Card>
        <Card>
          <CardHeader>
            <CardTitle tag="h3">Navigation backgrounds</CardTitle>
          </CardHeader>
          <CardBody>
            <Nav className="nav1 bg-primary br-7">
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white active" href="#">
                  Active
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link disabled text-white-50" href="#">
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="nav1 bg-info mt-4 br-7">
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white active" href="#">
                  Active
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link disabled text-white-50" href="#">
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="nav1 bg-success mt-4 br-7">
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white active" href="#">
                  Active
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link disabled text-white-50" href="#">
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="nav1 bg-danger mt-4 br-7">
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white active" href="#">
                  Active
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link disabled text-white-50" href="#">
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="nav1 bg-secondary mt-4 br-7">
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white active" href="#">
                  Active
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link disabled text-white-50" href="#">
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="nav1 bg-yellow mt-4 br-7">
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white active" href="#">
                  Active
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link text-white" href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem className="nav-item1">
                <NavLink className="nav-link disabled text-white-50" href="#">
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
          </CardBody>
          {/* <!---Prism Pre code--> */}
          <div className="html-code">
            <svg
              className="svg-icon me-2"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>{" "}
            Show Code{" "}
          </div>
          <figure className="highlight mb-0" id="element7">
            <pre ref={elementRef6}>
              <code className="language-markup mb-0">
               {`
                <Nav className="nav1 bg-primary br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-info mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-success mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-danger mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-secondary mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="nav1 bg-yellow mt-4 br-7">
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white active" href="#">
                    Active
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link text-white" href="#">
                    Link
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item1">
                  <NavLink className="nav-link disabled text-white-50" href="#">
                    Disabled
                  </NavLink>
                </NavItem>
              </Nav>
               `}
                
              </code>
            </pre>
            <div className="clipboard-icon" data-clipboard-target="#element7">
              <svg
              onClick={()=>{
                CopytoClipBoard(elementRef6)
            }}
                className="svg-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M14 7H8v14h11v-9h-5z" opacity=".3" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11l-6-6zm4 16H8V7h6v5h5v9z" />
              </svg>
            </div>
          </figure>
          {/* <!---Prism Pre code--> */}
        </Card>
      </Col>
    </Row>
  </div>
)
  };

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
