/** @format */

import React from "react";
import { Form, Input, Button, Row, Col, Checkbox, Typography } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiLoginBoxLine } from "react-icons/ri";
import { GrGooglePlus } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { DatePicker, TimePicker } from "antd";

import "./style.scss";
import { Link, useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { login, login_google } from "../../../redux/actions/authAction";
export default function BookTable() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(login(values, history));
  };
  const googleSuccess = (res) => {
    const user = res?.profileObj;
    const access_token = res?.tokenId;
    dispatch(login_google({ user, access_token }, history));
  };
  const googleError = () => {
    toast.error("Google Sign In was unsuccessful. Try again later", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <>
      <section className="login">
        <Row justify="center">
          <Col lg={12} sm={24} md={12}>
            <Form
              form={form}
              name="login-form"
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 20,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={handleSubmit}
              className="login-form"
            >
              <div className="login-form__icon">
                <RiLoginBoxLine />
              </div>
              <h2 className="login-form__title">{t("Book_Table.book")}</h2>
              <Form.Item
                label={t("Profile.account.name")}
                name="name"
                rules={[
                  {
                    required: true,
                    message: t("validate.first"),
                  },
                ]}
              >
                <Input placeholder="Enter your name" allowClear />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: t("validate.email.regex"),
                  },
                  {
                    required: true,
                    message: t("validate.email.required"),
                  },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
			  <Form.Item
                label={t("Profile.account.phone")}
                name="phone"
                rules={[
                  {
                    required: true,
                    message: t("validate.phone.required"),
                  },
                ]}
              >
                <Input placeholder="Enter your phone number" allowClear />
              </Form.Item>
              <Form.Item label={t("Book_Table.people")} name="people">
			  <Input placeholder="Enter your number of people" allowClear />

              </Form.Item>
              <Form.Item label={t("success.day")} name="day">
                <DatePicker format="DD/MM/YYYY" />
              </Form.Item>
              <Form.Item label={t("Book_Table.time")} name="time">
                <TimePicker format="HH:mm" />
              </Form.Item>
             

              <Form.Item
                wrapperCol={{
                  offset: 4,
                  span: 20,
                }}
              >
                <Button htmlType="submit" className="form-login__btn ">
                  {t("Book_Table.reserver")}
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </section>
      <ToastContainer autoClose={3000} />
    </>
  );
}
