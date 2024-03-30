import { Grid, Typography } from "@mui/material";

import Image_01 from '../../assets/images/partner02.jpg';
import Image_02 from '../../assets/images/partner03.jpg';
import companyLogo01 from '../../assets/images/companyLogo01.jpg';
import companyLogo02 from '../../assets/images/companyLogo02.jpg';
import companyLogo03 from '../../assets/images/companyLogo03.jpg';
import PartnerItem from "./partnerItem";
import "./style.css"
export default function Partner() {

    return (
        <>
            <Grid container sx={{ p: 5 }}>

                <Grid item xs={12} md={6}>
                    <img src={Image_01} alt="" height={'100%'} width={'100%'} className="" />
                </Grid>

                <Grid item xs={12} md={6}>
                    <img src={Image_02} alt="" height={'100%'} width={'100%'} className="" />
                </Grid>

                <Grid item xs={12} style={{ textAlign: "center", background: '' }} sx={{ mt: 2 }}>
                    <Typography variant="h3" style={{ fontFamily: 'cursive' }}> Đối tác của chúng tôi</Typography>
                </Grid>

            </Grid>

            <Grid container  className="partnerContent">
                <Grid item xs={12} md={4} sx={{ p: 2 }} className="partnerCard">
                    <PartnerItem
                        img={companyLogo01}
                        companyName="ABC1"
                        text="With professionalism and a spirit of cooperation, they bring unique and creative value to each project. This relationship provides opportunities for growth and success for both parties"
                    />
                </Grid>
                <Grid item xs={12} md={4} sx={{ p: 2 }} className="partnerCard" >
                    <PartnerItem
                        img={companyLogo02}
                        companyName="ABC1"
                        text="With professionalism and a spirit of cooperation, they bring unique and creative value to each project. This relationship provides opportunities for growth and success for both parties"
                    />
                </Grid>
                <Grid item xs={12} md={4} sx={{ p: 2 }} className="partnerCard">
                    <PartnerItem
                        img={companyLogo03}
                        companyName="ABC1"
                        text="With professionalism and a spirit of cooperation, they bring unique and creative value to each project. This relationship provides opportunities for growth and success for both parties"
                    />
                </Grid>
                <Grid item xs={12} md={4} sx={{ p: 2 }} className="partnerCard">
                    <PartnerItem
                        img={companyLogo01}
                        companyName="ABC1"
                        text="With professionalism and a spirit of cooperation, they bring unique and creative value to each project. This relationship provides opportunities for growth and success for both parties"
                    />
                </Grid>
                <Grid item xs={12} md={4} sx={{ p: 2 }} className="partnerCard">
                    <PartnerItem
                        img={companyLogo02}
                        companyName="ABC1"
                        text="With professionalism and a spirit of cooperation, they bring unique and creative value to each project. This relationship provides opportunities for growth and success for both parties"
                    />
                </Grid>
                <Grid item xs={12} md={4} sx={{ p: 2 }} className="partnerCard">
                    <PartnerItem
                        img={companyLogo03}
                        companyName="ABC1"
                        text="With professionalism and a spirit of cooperation, they bring unique and creative value to each project. This relationship provides opportunities for growth and success for both parties"
                    />
                </Grid>
            </Grid>
        </>
    )

}
