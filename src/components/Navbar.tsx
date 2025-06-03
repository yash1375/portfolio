import { Button, Col, Drawer, Menu, Row } from "antd";
import Logo from "../assets/logo.svg"
import "./Navbar.css"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { MenuOutlined } from '@ant-design/icons';
import ScreenContext from "../state/ScreenContext";


const items = [
    "About",
    "Projects",
    "Contact"
]



export default function Navbar() {

  const navItems = items.map((item) => (
    {label: <Link to={item} > {item} </Link>, key: item}
  ));

  const screen = useContext(ScreenContext)

  const [open,setOpen] = useState(false)

  function navToggle(){
    setOpen(!open)
  }

  return ( 
    <Row align={"middle"} justify={"space-between"}>
        <Col>
        <img src={Logo} alt="Abhinav.logo" className="center"/>
        </Col>
        {
        screen.sm && <Col>
        <Row gutter={16} >
                {items.map((item) => (
                    <Col>
                    <Link to={item} style={{fontSize:"1rem"}} >{item}</Link>
                    </Col>
                ))}
        </Row>
        </Col> 
        }

        {screen.xs && <Col>
        <Button icon={<MenuOutlined />} onClick={navToggle} />
        <Drawer title="Navigation"
                placement="left"
                open={open}
                onClose={navToggle}>
          <Menu mode="vertical"
                items={navItems}
                onClick={navToggle}
                 />
        </Drawer>
        </Col>}
        </Row>
  )
}
