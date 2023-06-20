import React from "react";
import { Grid } from "@mui/material";
import navigationData from '../../Json/navigation.json';
import './index.css';

const MenuNavigationItems = () =>{
    return(
        <Grid container className="headerMenuNav">
          {
                navigationData.map((mainNavItem, mainIndex)=>(
                    <Grid item key={mainIndex}>
                        <div className="dropdown">
                        <a className="dropbtn">{mainNavItem.title}</a>
                        <div className="dropdown-content">
                            {
                                mainNavItem.subMenus.map(subMenu=>(
                                   <>
                                   <a href={subMenu.pathname}>{subMenu.title}</a>
                                   {
                                    subMenu?.nestedSubMenu &&
                                   <ul className="nested-list">
                                   { subMenu?.nestedSubMenu.map(item=>(
                                            <li><a href={item.pathname}>{item.title}</a></li>
                                        ))}
                                   </ul>
                                   }
                                   </> 
                                ))
                            }
                        </div>
                        </div>
                    </Grid>
                ))
            }
        </Grid>
    )
}
export default MenuNavigationItems;