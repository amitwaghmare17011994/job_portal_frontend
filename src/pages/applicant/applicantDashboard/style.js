import React from 'react'
import styled from 'styled-components'
import { makeStyles } from "@material-ui/core";

export const Container = styled.div`
width:100%;
 
`

export const MenuItemContainer = styled.div`
padding:10px;
postion:relative;

 ${(props) => {
   return  props.isSelectedOption?`

background-color:#f5f6fa;
 .outer{
  position: relative;
 }
 .outer::before{
  content: "";
  position: absolute;
  background-color: #3f199c;
  height: 50px;
  width: 50px;
  top: -60px;
  right: -10px;
  z-index:11;
  border-bottom-right-radius: 80px; 
  }


.inner{
  position: relative; /* Add position relative so the pseudo element will origin off this with position absolute */
   
}
.inner::before {
  content: "";
  position: absolute;
  
  background-color: #f5f6fa;
  top: -50px;
  right: -10px;

  height: 50px;
  width: 50px;
   
}


 



.bottom{
  position: relative;
 }
 .bottom::before{
  content: "";
  position: absolute;
  background-color: #3f199c;
  height: 50px;
  width: 50px;
  bottom: -60px;
  right: -10px;
  z-index:11;
  border-top-right-radius: 80px; 
  }


.bottom-inner{
  position: relative; /* Add position relative so the pseudo element will origin off this with position absolute */
   
}
.bottom-inner::before {
  content: "";
  position: absolute;
  
  background-color: #f5f6fa;
  bottm: -50px;
  right: -10px;

  height: 50px;
  width: 50px;
   
}


 




   background-color:#f5f6fa;
   border-top-left-radius:10px;
   border-bottom-left-radius:10px;


   `:``

  }}
`

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#3f199c",
    height: "100vh",
    width: "100%",
    display: "flex",
    overflow: 'hidden'
  },
  menuItem: {
    padding: 10,
  },
  selected: {
    backgroundColor: '#f5f6fa',
    color: 'black',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
     
  },
  sideBar: {
    backgroundColor: "#3f199c",
    height: "100%",
    flex: 0.2,
    position: 'static',
    paddingLeft: 20,
    paddingTop: 20,
  },
  ground: {
    flex: 0.8,
    borderTopLeftRadius: 24,
    backgroundColor: "#f5f6fa",
    overflowY: 'scroll'
  },
}));
