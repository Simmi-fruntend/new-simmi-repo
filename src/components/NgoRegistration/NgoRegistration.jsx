import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import classes from "./NgoRegistration.module.scss";
import ngoRegistrationlogo from "../../assests/ngoRegistrationlogo.png";
import ngoUploadImg from "../../assests/ngoUploadImg.png";
import { useState } from "react";
import { useReducer } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const dataReducer = (state, action) => {
  switch (action.type) {
    case "FORM TEXT":
      return { ...state, [action.field]: action.payload };
    case "FORM FILE":
      return { ...state, [action.field]: action.payload };

    default:
      return state;
  }
};

const NgoRegistration = () => {
  const initialData = {
    organisation_name: "",
    wesite_link: "",
    photo: null,
    email: "",
    phone_number: "",
    organisation_address: "",
    problem_addressing: "",
    ngo_type: "",
    trust_deed: null,
    registration_certificate: null,
    memorandum: null,
    section_8_license: null,
    memorandum_of_association: null,
    document1_name: "",
    document1: null,
    document2_name: "",
    document2: null,
    document3_name: "",
    document3: null,
    document4_name: "",
    document4: null,
    facebook_link: "",
    instagram_link: "",
    linkedin_link: "",
    twitter_link: "",
  };
  const accessToken = localStorage.getItem("token");
  const apiUrl = "http://127.0.0.1:8000/api/ngo_registration/create/";
  const headers = {
    "Content-type": "multipart/form-data",
    Authorization: `Bearer ${accessToken}`,
  };

  const trustRegistration = [
    {
      id: 1,
      act: "Registration Certificate",
      name: "registration_certificate",
    },
    {
      id: 2,
      act: "Trust Deed",
      name: "trust_deed",
    },
  ];

  const societyRegistration = [
    {
      id: 1,
      act: "Registration Certificate",
      name: "registration_certificate",
    },
    {
      id: 2,
      act: "Memorandum",
      name: "memorandum",
    },
  ];

  const companyRegistration = [
    {
      id: 1,
      act: "Section 8 License",
      name: "section_8_license",
    },
    {
      id: 2,
      act: "Memorandum of Assocition (MoA)",
      name: "memorandum_of_association",
    },
  ];

  const currentYear = new Date().getFullYear();

  const [profileImage, setProfileImage] = useState(null);

  const [newSocialMedia, setNewSocialMedia] = useState([{ mediaLink: "" }]);

  const [ngoType, setNgoType] = useState("");
  const [socialMediaType, setSocialMediaType] = useState("");
  const [optionalDocument, setOptionalDocument] = useState([]);

  const [finalData, dispatch] = useReducer(dataReducer, initialData);

  const optionalDocumentName = `document${optionalDocument.length}_name`;

  const optionalDocumentFile = `document${optionalDocument.length}`;

  const navigate = useNavigate();

  // console.log(finalData);

  const ngoTypeHandler = (e) => {
    setNgoType(e.target.value);
    dispatch({
      type: "FORM TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
    setOptionalDocument([]);
  };

  const socialMediaTypeHandler = (e) => {
    const socialMediaName = e.target.value;
    if (socialMediaName === "Facebook") {
      setSocialMediaType("facebook_link");
    } else if (socialMediaName === "Instagram") {
      setSocialMediaType("instagram_link");
    } else if (socialMediaName === "LinkedIn") {
      setSocialMediaType("linkedin_link");
    } else if (socialMediaName === "Twitter") {
      setSocialMediaType("twitter_link");
    } else {
      setSocialMediaType("");
    }
  };

  const organizationTextHandler = (e) => {
    dispatch({
      type: "FORM TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const organizationFileHandler = (e) => {
    dispatch({
      type: "FORM FILE",
      field: e.target.name,
      payload: e.target.files[0],
    });
  };

  const profileImageHandler = (e) => {
    dispatch({
      type: "FORM FILE",
      field: e.target.name,
      payload: e.target.files[0],
    });
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const optionalDocumentHandler = () => {
    return setOptionalDocument([...optionalDocument, newOptionalDocument]);
  };

  const trustAct = trustRegistration.map((acts, i) => {
    const addButton =
      i === 0 && optionalDocument.length <= 3 ? (
        <Grid item>
          <Button
            type="button"
            className={classes.addLines}
            onClick={optionalDocumentHandler}
          >
            +
          </Button>
        </Grid>
      ) : (
        <Grid item>
          <Button
            type="button"
            className={classes.removeLines}
            sx={{ opacity: "0", cursor: "auto !important" }}
          >
            *
          </Button>
        </Grid>
      );
    return (
      <>
        <Grid
          item
          container
          alignItems={"center"}
          justifyContent="space-around"
          key={acts.id}
          mt="25px"
        >
          <Grid item>
            <Typography component="h6">Document:</Typography>
          </Grid>
          <Grid
            item
            container
            width="200px"
            alignItems="center"
            justifyContent={"center"}
            sx={{
              borderRadius: "5px",
              background: "#f4f4f4",
              minHeight: "74px",
            }}
          >
            <Typography
              component="h4"
              sx={{ fontSize: "18px", width: "100%", textAlign: "center" }}
            >
              {acts.act}{" "}
              <span style={{ color: "#ff0000", fontSize: "24px" }}>*</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="h6">Proof:</Typography>
          </Grid>
          <Grid item width="485px">
            <input
              type="file"
              // accept="image/*"
              style={{ paddingTop: "18px" }}
              name={acts.name}
              onChange={(e) => {
                organizationFileHandler(e);
              }}
              required
            />
          </Grid>
          {addButton}
        </Grid>
      </>
    );
  });

  const socityAct = societyRegistration.map((acts, i) => {
    const addButton =
      i === 0 && optionalDocument.length <= 3 ? (
        <Grid item>
          <Button
            type="button"
            className={classes.addLines}
            onClick={optionalDocumentHandler}
          >
            +
          </Button>
        </Grid>
      ) : (
        <Grid item>
          <Button
            type="button"
            className={classes.removeLines}
            sx={{ opacity: "0", cursor: "auto !important" }}
          >
            *
          </Button>
        </Grid>
      );
    return (
      <>
        <Grid
          item
          container
          alignItems={"center"}
          justifyContent="space-around"
          key={acts.id}
          mt="25px"
        >
          <Grid item>
            <Typography component="h6">Document:</Typography>
          </Grid>
          <Grid
            item
            container
            width="200px"
            alignItems="center"
            justifyContent={"center"}
            sx={{
              borderRadius: "5px",
              background: "#f4f4f4",
              minHeight: "74px",
            }}
          >
            <Typography
              component="h4"
              sx={{ fontSize: "18px", width: "100%", textAlign: "center" }}
            >
              {acts.act}{" "}
              <span style={{ color: "#ff0000", fontSize: "24px" }}>*</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="h6">Proof:</Typography>
          </Grid>
          <Grid item width="485px">
            <input
              type="file"
              accept="image/*"
              style={{ paddingTop: "18px" }}
              name={acts.name}
              onChange={(e) => {
                organizationFileHandler(e);
              }}
              required
            />
          </Grid>
          {addButton}
        </Grid>
      </>
    );
  });

  const companiesAct = companyRegistration.map((acts, i) => {
    const addButton =
      i === 0 && optionalDocument.length <= 3 ? (
        <Grid item>
          <Button
            type="button"
            className={classes.addLines}
            onClick={optionalDocumentHandler}
          >
            +
          </Button>
        </Grid>
      ) : (
        <Grid item>
          <Button
            type="button"
            className={classes.removeLines}
            sx={{ opacity: "0", cursor: "auto !important" }}
          >
            *
          </Button>
        </Grid>
      );
    return (
      <>
        <Grid
          item
          container
          alignItems={"center"}
          justifyContent="space-around"
          key={acts.id}
          mt="25px"
        >
          <Grid item>
            <Typography component="h6">Document:</Typography>
          </Grid>
          <Grid
            item
            container
            width="200px"
            alignItems="center"
            justifyContent={"center"}
            sx={{
              borderRadius: "5px",
              background: "#f4f4f4",
              minHeight: "74px",
            }}
          >
            <Typography
              component="h4"
              sx={{ fontSize: "18px", width: "100%", textAlign: "center" }}
            >
              {acts.act}{" "}
              <span style={{ color: "#ff0000", fontSize: "24px" }}>*</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="h6">Proof:</Typography>
          </Grid>
          <Grid item width="485px">
            <input
              type="file"
              accept="image/*"
              style={{ paddingTop: "18px" }}
              name={acts.name}
              onChange={(e) => {
                organizationFileHandler(e);
              }}
              required
            />
          </Grid>
          {addButton}
        </Grid>
      </>
    );
  });

  const newOptionalDocument = (
    <>
      <Grid item>
        <Typography component="h6">Document :</Typography>
      </Grid>
      <Grid item width="203px">
        <input
          type={"text"}
          name={optionalDocumentName}
          onChange={(e) => {
            organizationTextHandler(e);
          }}
        />
      </Grid>
      <Grid item>
        <Typography component="h6">Proof:</Typography>
      </Grid>
      <Grid item width="485px">
        <input
          type="file"
          accept="image/*"
          style={{ paddingTop: "18px" }}
          name={optionalDocumentFile}
          onChange={(e) => {
            organizationFileHandler(e);
          }}
        />
      </Grid>
    </>
  );

  const socialMediaAddHandler = () => {
    if (newSocialMedia.length <= 3) {
      setNewSocialMedia([...newSocialMedia, { mediaLink: "" }]);
    }
  };

  const socialMediaRemoveHandler = (i) => {
    const links = [...newSocialMedia];

    links.splice(i, 1);
    setNewSocialMedia(links);
    dispatch({
      type: "FORM TEXT",
      field: socialMediaType,
      payload: "",
    });
  };

  const optionalDocumentRemoveHandler = (i) => {
    const links = [...optionalDocument];
    links.splice(i, 1);
    setOptionalDocument(links);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, finalData, {
        headers: headers,
      })
      .then((res) => {
        console.log(res);
      }).catch((err)=>{
        console.log(err.message)
      });
      alert("Your registraion is under progress.")
      navigate("/ngoregprogress")

    //  axios.post('/',actualData).then((res)=>{
    //   console.log(res);
    //  }).catch(err=>{

    //  })
  };

  return (
    <div className={classes.ngoRegistration_container}>
      <div className={classes.background} />
      <Grid container className={classes.ngoRegistration_header}>
        <Grid item className={classes.ngoRegistration_logo}>
          <img src={ngoRegistrationlogo} alt="Register Now" />
        </Grid>
        <Grid item sx={{ zIndex: "2" }}>
          <Typography component="h3">NGO Registration</Typography>
          <Typography component="h5">Register your NGO </Typography>
        </Grid>
      </Grid>
      <div className={classes.ngoRegistration_form_container}>
        {/* form */}
        <form onSubmit={formSubmitHandler}>
          <Grid
            container
            flexDirection="column"
            className={classes.ngoRegistration_form}
          >
            {/* text input */}
            <Grid
              item
              container
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Grid item container flexDirection={"column"} width="58%">
                <Grid item mt={"86px"}>
                  <Typography component="p" mb={"21px"}>
                    Organization Name <span>*</span>
                  </Typography>
                  <input
                    type="text"
                    placeholder="Enter Organization name"
                    name="organisation_name"
                    onChange={(e) => {
                      organizationTextHandler(e);
                    }}
                    required
                  />
                </Grid>

                <Grid item mt={"43px"}>
                  <Typography component="p" mb={"23px"}>
                    Organization Website
                  </Typography>
                  <input
                    type="url"
                    placeholder="Enter URL address"
                    name="wesite_link"
                    onChange={(e) => {
                      organizationTextHandler(e);
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                type="button"
                item
                style={{
                  background: "none",
                  border: "none",
                  marginTop: "86px",
                  padding: "0",
                  width: "30%",
                }}
                component="label"
              >
                <Grid container className={classes.uploadImg_box}>
                  {!profileImage && (
                    <Typography component="p" mb={"23px"}>
                      Upload Photo <span>*</span>
                    </Typography>
                  )}
                  <img
                    src={!profileImage ? ngoUploadImg : profileImage}
                    alt="Organisation_Image"
                    style={{
                      display: "block",
                      width: `${profileImage && "321px"}`,
                      height: `${profileImage && "319px"}`,
                    }}
                  />
                  <input
                    type="file"
                    accept="image/*"
                    name={"photo"}
                    onChange={(e) => {
                      profileImageHandler(e);
                    }}
                    hidden
                    required
                  />
                  {!profileImage && (
                    <Typography item className={classes.uploadImg_p}>
                      Upload organization Photo
                    </Typography>
                  )}
                </Grid>
              </Button>
            </Grid>

            <Grid item container justifyContent={"space-between"}>
              <Grid item mt={"54px"} width="58%">
                <Typography component="p" mb={"23px"}>
                  Email <span>*</span>
                </Typography>
                <input
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  onChange={(e) => {
                    organizationTextHandler(e);
                  }}
                  required
                />
              </Grid>
              <Grid item mt={"54px"} width="38%">
                <Typography component="p" mb={"23px"}>
                  Phone no. <span>*</span>
                </Typography>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  placeholder="Enter phone number"
                  name="phone_number"
                  onChange={(e) => {
                    organizationTextHandler(e);
                  }}
                  required
                />
              </Grid>
            </Grid>

            <Grid item mt={"65px"}>
              <Typography component="p" mb={"23px"}>
                Organization Address
              </Typography>
              <textarea
                placeholder="Enter ngo address"
                name="organisation_address"
                onChange={(e) => {
                  organizationTextHandler(e);
                }}
                maxLength={160}
                style={{ height: "175px" }}
              />
            </Grid>

            <Grid item mt={"65px"}>
              <Typography component="p" mb={"23px"}>
                Problem Addressing{" "}
                <span>
                  *{" "}
                  <sup>
                    {" "}
                    <sup>(Maximum 160 Letters)</sup>
                  </sup>
                </span>
              </Typography>
              <textarea
                placeholder="Enter Problem"
                name="problem_addressing"
                onChange={(e) => {
                  organizationTextHandler(e);
                }}
                maxLength={160}
                required
                style={{ height: "231px" }}
              />
            </Grid>

            <Grid
              item
              container
              mt={"45px"}
              mb={"20px"}
              className={classes.ngoType_box}
            >
              <Grid item>
                <Typography component="p">
                  NGO Registration Act <span>*</span>
                </Typography>
              </Grid>
              <Grid item>
                <select
                  value={ngoType}
                  onChange={ngoTypeHandler}
                  name="ngo_type"
                  required
                >
                  <option value="">-- Choose ACT --</option>
                  <option value="Trust Act">Trust Act</option>
                  <option value="Society Act">Society Act</option>
                  <option value="Companies Act">Companies Act</option>
                </select>
              </Grid>
            </Grid>

            {ngoType && (
              <>
                <Grid item mt={"55px"}>
                  <Typography component="p" mb={"17px"}>
                    Upload Document Proofs <span>*</span>{" "}
                  </Typography>

                  <Grid container alignItems={"center"} flexDirection="column">
                    {ngoType === "Trust Act" && trustAct}
                    {ngoType === "Society Act" && socityAct}
                    {ngoType === "Companies Act" && companiesAct}
                  </Grid>
                  {optionalDocument.map((document, i) => {
                    return (
                      <Grid
                        item
                        container
                        alignItems={"center"}
                        justifyContent="space-around"
                        mt="25px"
                        key={i}
                      >
                        {newOptionalDocument}
                        {i === optionalDocument.length - 1 ? (
                          <Grid item>
                            <Button
                              type="button"
                              className={classes.removeLines}
                              onClick={() => {
                                optionalDocumentRemoveHandler(i);
                              }}
                            >
                              -
                            </Button>
                          </Grid>
                        ) : (
                          <Grid item>
                            <Button
                              type="button"
                              className={classes.removeLines}
                              sx={{ opacity: "0", cursor: "auto !important" }}
                            >
                              *
                            </Button>
                          </Grid>
                        )}
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            )}

            <Grid item mt={"75px"}>
              <Typography component="p" mb={"19px"}>
                Social media Links{" "}
              </Typography>

              <Grid container alignItems={"center"} flexDirection="column">
                {newSocialMedia.map((media, i) => {
                  const addButton = i === 0 && newSocialMedia.length <= 3 && (
                    <Grid item>
                      <Button
                        type="button"
                        className={classes.addLines}
                        onClick={socialMediaAddHandler}
                      >
                        +
                      </Button>
                    </Grid>
                  );
                  return (
                    <Grid
                      item
                      container
                      alignItems={"center"}
                      justifyContent="space-between"
                      key={i}
                      mt={"25px"}
                    >
                      <Grid item>
                        <Typography component="h6">
                          Link to{" "}
                          {i === 0 && (
                            <sup>
                              <span style={{ color: "#ff0000" }}>*</span>
                            </sup>
                          )}{" "}
                          :
                        </Typography>
                      </Grid>
                      <Grid item width="246px">
                        <select
                          required={i === 0 && true}
                          onChange={socialMediaTypeHandler}
                        >
                          <option value="">--Select--</option>
                          <option value="Facebook">Facebook</option>
                          <option value="Instagram">Instagram</option>
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="Twitter">Twitter</option>
                        </select>
                      </Grid>
                      <Grid item>
                        <Typography component="h6">URL:</Typography>
                      </Grid>
                      <Grid item width="485px">
                        <input
                          type="text"
                          placeholder="www.facebook.com/johnnadeniyi"
                          name={socialMediaType}
                          onChange={(e) => {
                            organizationTextHandler(e);
                          }}
                          required={i === 0 && true}
                        />
                      </Grid>

                      {addButton}
                      {i === newSocialMedia.length - 1 && i > 0 ? (
                        <Grid item>
                          <Button
                            type="button"
                            className={classes.removeLines}
                            onClick={() => {
                              socialMediaRemoveHandler(i);
                            }}
                          >
                            -
                          </Button>
                        </Grid>
                      ) : (
                        !addButton && (
                          <Grid item>
                            <Button
                              type="button"
                              className={classes.removeLines}
                              sx={{ opacity: "0", cursor: "auto !important" }}
                            >
                              *
                            </Button>
                          </Grid>
                        )
                      )}
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>

            <Grid
              item
              container
              mt={"115px"}
              mb={"79px"}
              justifyContent="space-between"
            >
              <Button item type="button" className={classes.back_button}>
                Back
              </Button>
              <div item>
                <Button item type="reset" className={classes.reset_button}>
                  Reset
                </Button>
                <Button item type="submit" className={classes.submit_button}>
                  Request Campaign
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
        <Typography component="h4" className={classes.footer}>
          Copyright ©{currentYear} All rights reserved | Simmi Foundation{" "}
        </Typography>
      </div>
    </div>
  );
};

export default NgoRegistration;
