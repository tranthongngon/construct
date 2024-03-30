import React from "react";
import { styled } from "@mui/material";
import SubTitle from "../SubTitle";
import TitleSection from "../TitleSection";
import { Formik } from "formik";
import * as Yup from "yup";
import ButtonLoad from "../ButtonLoad";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "./style.scss";

const Schema = Yup.object().shape({
  name: Yup.string().required("Not empty"),
  email: Yup.string().email("Invalid email").required("Not empty"),
  phone: Yup.number()
    .min(10, "Phone number invalid")
    .required("Not empty"),
  company: Yup.string().required("Not empty"),
  message: Yup.string().required("Not empty"),
});

export default function SectionForm() {
  const SectionForm = styled("section")(({ theme }) => ({
    input: {
      border: `1px solid ${theme.palette.grey[800]}`,
      color: theme.palette.text.primary,
      "&:active, &:hover, :focus": {
        border: `1px solid ${theme.palette.grey[800]}`,
        color: theme.palette.text.primary,
      },
    },
    textarea: {
      border: `1px solid ${theme.palette.grey[800]}`,
      color: theme.palette.text.primary,
      "&:active, &:hover, :focus": {
        border: `1px solid ${theme.palette.grey[800]}`,
        color: theme.palette.text.primary,
      },
    },
    ".error": {
      color: theme.palette.error.main,
    },
    label: {
      span: {
        color: theme.palette.error.main,
      },
    },
    '.section__form-info' : {
      h4: {
        color: theme.palette.primary.main
      },
      p: {
        color: theme.palette.text.primary
      }
    },
    '.section__form-info-icon': {
      svg : {
        fill: theme.palette.secondary.main
      },
      '&:hover': {
        background: theme.palette.secondary.main,
        svg : {
          fill: theme.palette.common.white
        }
      }
    }
  }));
  return (
    <SectionForm className="section__form section">
      <div className="container">
        <div className="section__news-head">
          <SubTitle text="Contact Us" />
          <TitleSection text="Our information" color="#141414" />
        </div>
        <div className="section__form-content">
          <div className="section__form-form">
            <Formik
              initialValues={{
                email: "",
                name: "",
                company: "",
                phone: 0,
                message: "",
              }}
              validationSchema={Schema}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="section__form-form-wrap">
                    <div className="form-control">
                      <label htmlFor="name">
                        Name <span>*</span>:
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {errors.name && touched.name && (
                        <span className="error">{errors.name}</span>
                      )}
                    </div>
                    <div className="form-control">
                      <label htmlFor="email">
                        Email <span>*</span>:
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email && (
                        <span className="error">{errors.email}</span>
                      )}
                    </div>
                    <div className="form-control">
                      <label htmlFor="phone">
                        Phone <span>*</span>:
                      </label>
                      <input
                        id="phone"
                        type="number"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
                      {errors.phone && touched.phone && (
                        <span className="error">{errors.phone}</span>
                      )}
                    </div>
                    <div className="form-control">
                      <label htmlFor="company">
                        Company <span>*</span>:
                      </label>
                      <input
                        id="company"
                        type="company"
                        name="company"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.company}
                      />
                      {errors.company && touched.company && (
                        <span className="error">{errors.company}</span>
                      )}
                    </div>
                    <div className="form-control form-textarea">
                      <label htmlFor="message">
                        Message <span>*</span>:
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                      ></textarea>
                      {errors.message && touched.message && (
                        <span className="error">{errors.message}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-button">
                    <ButtonLoad
                      text="Send"
                      type="submit"
                      disabled={isSubmitting}
                    />
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <div className="section__form-info">
            <h4>headquarters</h4>
            <p>
              454 Đ. Võ Chí Công, Phường Phú Hữu, Thủ Đức, Thành phố Hồ Chí Minh
              700000, Việt Nam
            </p>
            <p>Phone: +84 123 456 789</p>
            <p>Email: construct@gmail.com</p>
            <div className="section__form-info-icons">
              <button className="section__form-info-icon">
                <FacebookIcon />
              </button>
              <button className="section__form-info-icon">
                <InstagramIcon />
              </button>
              <button className="section__form-info-icon">
                <XIcon />
              </button>
              <button className="section__form-info-icon">
                <PinterestIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionForm>
  );
}
