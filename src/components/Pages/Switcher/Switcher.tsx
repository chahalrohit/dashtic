import React from 'react';
import { Row, Col, Card, CardBody, Label, Input, Button } from 'reactstrap';
import * as Switcherdata from "../../../Shared/datas/Switcherdata/Switcherdata"
import { PageHeaders } from '../../../Shared/Prism/Prism';

const Switcher = () => {
    React.useEffect(() => {
        Switcherdata.localStorageBackUp();
    });
    function changePrimaryColor(color:string) {
        var userColor:string = color
        localStorage.setItem("dashticPrimaryColor", userColor);
        // to store value as opacity 0.95 we use 95
        localStorage.setItem("dashticprimaryHoverColor", userColor + 95);
        localStorage.setItem("dashticprimaryBorderColor", userColor);
        localStorage.setItem("dashticprimaryTransparent", userColor + 20);

        const dynamicPrimaryLight = document.querySelectorAll(
            "input.color-primary-light"
        );

        Switcherdata.dynamicLightPrimaryColor(dynamicPrimaryLight, userColor);

    }
    function BgBackground(color:string) {
        var userColor:string = color
        document.querySelector("body")?.classList.add("dark-mode");
        document.querySelector("body")?.classList.remove("light-mode");
        localStorage.setItem("DashticBGswitcher", userColor);

        const dynamicBackgroundColor = document.querySelectorAll(
            "input.background-primary-light"
        );

        Switcherdata.dynamicBgTransparentBackground(
            dynamicBackgroundColor,
            userColor
        );

        localStorage.removeItem("dashticlighttheme");
        localStorage.setItem("dashticdark", 'true');
    }
    return (
        <div>
            <PageHeaders
                title="Switcher"
                home="Home"
                name="Pages"
                fonticonsname="Switcher"
            />

            <div className="container">
                <Row>
                    <Col lg="6" className="m-auto">
                        <Card className="sidebar-right1">
                            <CardBody>
                                <div className="predefined_styles">
                                    <div className="swichermainleft text-center">
                                        <h4>LTR AND RTL VERSIONS</h4>
                                        <div className="skin-body">
                                            <div className="switch_section">
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">LTR</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch25" id="myonoffswitch54" className="onoffswitch2-checkbox" defaultChecked />
                                                        <Label htmlFor="myonoffswitch54" onClick={() => Switcherdata.RtltoLtr()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">RTL</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch25" id="myonoffswitch55" className="onoffswitch2-checkbox" />
                                                        <Label htmlFor="myonoffswitch55" onClick={() => Switcherdata.LtrtoRtl()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swichermainleft">
                                        <h4>Theme Style</h4>
                                        <div className="skin-body">
                                            <div className="switch_section">
                                                <div className="switch-toggle d-flex">
                                                    <span className="me-auto">Light Theme</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch1" id="myonoffswitch1" className="onoffswitch2-checkbox" defaultChecked />
                                                        <Label htmlFor="myonoffswitch1" onClick={() => Switcherdata.LightTheme()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Dark Theme</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch1" id="myonoffswitch2" className="onoffswitch2-checkbox" />
                                                        <Label htmlFor="myonoffswitch2" onClick={() => Switcherdata.dark()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swichermainleft switcher-nav">
                                        <h4>Navigation Style</h4>
                                        <div className="skin-body">
                                            <div className="switch_section">
                                                <div className="switch-toggle d-flex">
                                                    <span className="me-auto">Vertical Menu</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch15" id="myonoffswitch34" className="onoffswitch2-checkbox" defaultChecked />
                                                        <Label htmlFor="myonoffswitch34" onClick={() => Switcherdata.VerticalMenu()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Horizantal Click Menu</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch15" id="myonoffswitch35" className="onoffswitch2-checkbox" />
                                                        <Label htmlFor="myonoffswitch35" onClick={Switcherdata.horizontal} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Horizantal Hover Menu</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch15" id="myonoffswitch111" className="onoffswitch2-checkbox" />
                                                        <Label htmlFor="myonoffswitch111" onClick={() => Switcherdata.HorizontalHoverMenu()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swichermainleft">
                                        <h4>Theme Primary Color</h4>
                                        <div className="skin-body">
                                            <div className="switch_section">
                                                <div className="switch-toggle d-flex">
                                                    <span className="me-auto">Primary Color</span>
                                                    <div className="">
                                                        <input className=" input-color-picker color-primary-light" defaultValue="#4454c3" id="colorID"
                                                            onChange={(e) => changePrimaryColor(e.target.value)}
                                                            type="color" data-id="bg-color" data-id1="bg-hover" data-id2="bg-border" name="lightPrimary" />
                                                    </div>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Background Color</span>
                                                    <div className="">
                                                        <input className="input-bg-picker background-primary-light"
                                                            defaultValue="#373c56" id="bgID"
                                                            onChange={(e) => BgBackground(e.target.value)}
                                                            type="color" data-id3="body" data-id4="theme" name="BackgroundPrimary" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swichermainleft leftmenu-styles">
                                        <h4>Menu Styles</h4>
                                        <div className="skin-body">
                                            <div className="switch_section">
                                                <div className="switch-toggle d-flex">
                                                    <span className="me-auto">Light Menu</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch2" id="myonoffswitch3" className="onoffswitch2-checkbox" defaultChecked />
                                                        <Label htmlFor="myonoffswitch3" onClick={() => Switcherdata.LightMenu()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Color Menu</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch2" id="myonoffswitch4" className="onoffswitch2-checkbox" />
                                                        <Label htmlFor="myonoffswitch4" onClick={() => Switcherdata.ColorMenu()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Dark Menu</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch2" id="myonoffswitch5" className="onoffswitch2-checkbox" />
                                                        <Label htmlFor="myonoffswitch5" onClick={() => Switcherdata.DarkMenu()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swichermainleft header-styles">
                                        <h4>Header Styles</h4>
                                        <div className="skin-body">
                                            <div className="switch_section">
                                                <div className="switch-toggle d-flex">
                                                    <span className="me-auto">Light Header</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch3" id="myonoffswitch6" className="onoffswitch2-checkbox" defaultChecked />
                                                        <Label htmlFor="myonoffswitch6" onClick={() => Switcherdata.Lightheader()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Color Header</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch3" id="myonoffswitch7" className="onoffswitch2-checkbox" />
                                                        <Label htmlFor="myonoffswitch7" onClick={() => Switcherdata.Colorheader()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Dark Header</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch3" id="myonoffswitch8" className="onoffswitch2-checkbox" />
                                                        <Label htmlFor="myonoffswitch8" onClick={() => Switcherdata.Darkheader()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swichermainleft">
                                        <h4>Skin Modes</h4>
                                        <div className="switch_section">
                                            <div className="switch-toggle d-flex">
                                                <span className="me-auto">Default Body</span>
                                                <div className="onoffswitch2"><Input type="radio" name="onoffswitchBody" id="myonoffswitch07" className="onoffswitch2-checkbox" defaultChecked />
                                                    <Label htmlFor="myonoffswitch07" onClick={() => Switcherdata.Defaultbody()} className="onoffswitch2-label"></Label>
                                                </div>
                                            </div>
                                            <div className="switch-toggle d-flex">
                                                <span className="me-auto">Body Style1</span>
                                                <div className="onoffswitch2"><Input type="radio" name="onoffswitchBody" id="myonoffswitch06" className="onoffswitch2-checkbox" />
                                                    <Label htmlFor="myonoffswitch06" onClick={() => Switcherdata.Bodystyle()} className="onoffswitch2-label"></Label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swichermainleft">
                                        <h4>Layout Width Styles</h4>
                                        <div className="skin-body">
                                            <div className="switch_section">
                                                <div className="switch-toggle d-flex">
                                                    <span className="me-auto">Full Width</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch4" id="myonoffswitch9" className="onoffswitch2-checkbox" defaultChecked />
                                                        <Label htmlFor="myonoffswitch9" onClick={() => Switcherdata.FullWidth()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Boxed</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch4" id="myonoffswitch10" className="onoffswitch2-checkbox" />
                                                        <Label htmlFor="myonoffswitch10" onClick={() => Switcherdata.Boxed()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swichermainleft switcher-layout">
                                        <h4>Layout Positions</h4>
                                        <div className="skin-body">
                                            <div className="switch_section">
                                                <div className="switch-toggle d-flex">
                                                    <span className="me-auto">Fixed</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch5" id="myonoffswitch11" className="onoffswitch2-checkbox" defaultChecked/>
                                                        <Label htmlFor="myonoffswitch11" onClick={() => Switcherdata.Fixed()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                                <div className="switch-toggle d-flex mt-2">
                                                    <span className="me-auto">Scrollable</span>
                                                    <p className="onoffswitch2 my-0"><Input type="radio" name="onoffswitch5" id="myonoffswitch12" className="onoffswitch2-checkbox" />
                                                        <Label htmlFor="myonoffswitch12" onClick={() => Switcherdata.Scrollable()} className="onoffswitch2-label"></Label>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swichermainleft">
                                        <h4>Reset All Styles</h4>
                                        <div className="skin-body">
                                            <div className="switch_section my-4">
                                                <Button color="" className="btn btn-danger btn-block"
                                                    onClick={() => {
                                                        interface HTMLElement extends Element {
                                                            style: any;
                                                          }
                                                        localStorage.clear();
                                                        let htm = document.querySelector('html') as HTMLElement
                                                        htm.style = '';

                                                        Switcherdata.resetData()
                                                    }}
                                                    type="button">Reset All
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

Switcher.propTypes = {};

Switcher.defaultProps = {};

export default Switcher;
