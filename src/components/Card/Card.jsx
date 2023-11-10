import React from "react";
import { CCard, CCardBody, CCardImage, CCardText, CCardTitle, CButton } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';


export function Card(){

  return(
    <>
    <div className="card-contain">
      <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={"https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2250,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/x1nlzlyldasoj6pllfug/IMGWorldsofAdventureAdmissionTicketinDubai-Klook-KlookAustralia.jpg"} />
        <CCardBody>
          <CCardTitle>Card title</CCardTitle>
          <CCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </CCardText>
          <CButton href="#">Go somewhere</CButton>
        </CCardBody>
      </CCard>
    </div>
    </>
  )
}