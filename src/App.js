//react hooks
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


//mui components
import {
    Box,
    Typography,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Button,
    Paper
} from "@mui/material";


//mui icons
import { ReactComponent as UploadIcon } from "../../../images/uploadIcon.svg";


//custom components
import { sastPlan } from "../../../services/webServices";
import { handleProgressBar } from "../../custom-components/ProgressBar/ProgressBarWithAPI";
import { LoadingModalContext } from "../../main-pages/ServicePage";


//doc related libraries
import * as pdfjsLib from "pdfjs-dist";
import mammoth from "mammoth";
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;


export default function SASTForm() {

    const { setLoadingState } = useContext(LoadingModalContext);
    const navigate = useNavigate();
    const [selectedDoc, setSelectedDoc] = useState("");
    const [submitted, setSubmitted] = useState("");
    const [errors, setErrors] = useState({});
    const [loC, setLoC] = useState("");
    const [clientName, setClientName] = useState("");
    const [appName, setAppName] = useState("");
    const [extractedText, setExtractedText] = useState({
        fd: "",
        tmd: "",
        srq: "",
        srec: "",
    });
    const [files, setFiles] = useState({
        fd: null,
        tmd: null,
        srq: null,
        srec: null,
    });
    const uploadTextMap = {
        fd: "Functional Modules",
        tmd: "Threat Modelling",
        srq: "Security Requirements",
        srec: "Security Recommendations",
    };


    //file upload
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const allowedExtensions = ["pdf", "doc", "docx"];
        const fileExt = file.name.split(".").pop().toLowerCase();
        if (!allowedExtensions.includes(fileExt)) {
            alert("Invalid file type. Only PDF, DOC, and DOCX files are allowed.");
            e.target.value = "";
            return;
        }
        let textContent = "";
        try {
            if (fileExt === "pdf") {
                textContent = await convertPdfToText(file);
            } else if (fileExt === "docx" || fileExt === "doc") {
                textContent = await convertDocxToText(file);
            }
        } catch (err) {
            console.error("Text extraction failed:", err);
            alert("Unable to read the document. Please upload a valid PDF/DOC/DOCX file.");
            return;
        }
        setFiles((prev) => ({
            ...prev,
            [selectedDoc]: file,
        }));
        setExtractedText((prev) => ({
            ...prev,
            [selectedDoc]: textContent,
        }));

        setErrors((prev) => ({
            ...prev,
            [selectedDoc]: "",
        }));
    };


    // Convert PDF file => text
    async function convertPdfToText(file) {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        let text = "";
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(item => item.str).join(" ") + "\n";
        }
        return text;
    }


    // Convert DOCX => text
    async function convertDocxToText(file) {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        return result.value;
    }


    //handle submit
    const handleSubmit = async () => {
        setSubmitted(true);
        const newErrors = {};
        if (!loC) newErrors.loC = "Number of lines of code is required.";
        if (!clientName) newErrors.clientName = "Client name is required.";
        if (!appName) newErrors.appName = "Application name is required.";
        setErrors(newErrors);
        const missingUploads =
            !files.fd || !files.tmd || !files.srq || !files.srec;

        if (missingUploads) {
            alert("Please upload all the required documents.");
            return; 
        }
        if (Object.keys(newErrors).length > 0) {
            return;
        }
        const inputData = {
            clientName,
            appName,
            loC
        };
        let progressHandler;
        try {
            progressHandler =
                handleProgressBar({ setLoadingState, totalDurationMs: 35000 });
            progressHandler.start("Generating SAST Test Plan");
            const securityTestPlanResponse = await sastPlan({
                formData: inputData,
                funcMod: extractedText.fd,
                securityReq: extractedText.tmd,
                securityRecom: extractedText.srq,
                threatM: extractedText.srec,
            });
            const securityTestPlan = securityTestPlanResponse.data;
            await progressHandler.finishAndClose();
            navigate("/dashboard/security-testing/sast-test-plan", { state: { sastTestPlan: securityTestPlan } });
        } catch (error) {
            console.error("Error generating security plan:", error);
            setLoadingState({
                open: false,
                message: "",
                progress: null,
            });
            alert("An error occurred while generating the security test plan.");

        } finally {
            if (progressHandler) {
                progressHandler.stop();
            }
            setLoadingState({
                open: false,
                message: "",
                progress: null,
            });
        }
    };



    return (
        <Box sx={{ width: "1100px", mx: "auto", p: 3 }}>
            
            {/* SECTION 1 */}
            <Paper sx={{ p: 3, mb: 4 }} elevation={0}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Static Application Security Testing (SAST)
                </Typography>

                <TextField
                    fullWidth
                    label="Number of Lines of Code"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    required
                    value={loC}
                    onChange={(e) => setLoC(e.target.value)}
                    error={!!errors.loC}
                    helperText={errors.loC}
                />

                <TextField
                    fullWidth
                    label="Programming Languages Used"
                    variant="outlined"
                    sx={{ mb: 3 }}
                />

                <Typography sx={{ mb: 1 }}>
                    Do you use any third-party libraries or frameworks?
                </Typography>

                <RadioGroup row>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </Paper>

            {/* SECTION 2 */}
            <Paper sx={{ p: 3, mb: 4 }} elevation={0}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Upload your documents*
                </Typography>

                <FormControl sx={{ mb: 2 }}>
                    <RadioGroup
                        row
                        value={selectedDoc}
                        onChange={(e) => setSelectedDoc(e.target.value)}
                    >
                        <FormControlLabel sx={{ mr: 5 }} value="fd" control={<Radio />} label="Functional Modules" />
                        <FormControlLabel sx={{ mr: 5 }} value="tmd" control={<Radio />} label="Threat Modelling" />
                        <FormControlLabel sx={{ mr: 5 }} value="srq" control={<Radio />} label="Security Requirements" />
                        <FormControlLabel value="srec" control={<Radio />} label="Security Recommendations" />
                    </RadioGroup>
                </FormControl>
                <Box
                    sx={{
                        border: "2px dashed #90caf9",
                        background: "#e3f2fd",
                        p: 4,
                        borderRadius: 2,
                        textAlign: "center",
                    }}
                >
                    {/* File list always stays */}
                    <Box sx={{ mt: 2, mb: 2 }}>
                        {files.fd && (
                            <Typography sx={{ fontSize: "13px" }}>
                                Functional Modules: {files.fd.name}
                            </Typography>
                        )}
                        {files.tmd && (
                            <Typography sx={{ fontSize: "13px" }}>
                                Threat Modelling: {files.tmd.name}
                            </Typography>
                        )}
                        {files.srq && (
                            <Typography sx={{ fontSize: "13px" }}>
                                Security Requirements: {files.srq.name}
                            </Typography>
                        )}
                        {files.srec && (
                            <Typography sx={{ fontSize: "13px" }}>
                                Security Recommendations: {files.srec.name}
                            </Typography>
                        )}
                    </Box>

                    {/* Only hide the upload input after all four docs uploaded */}
                    {!(
                        files.fd &&
                        files.tmd &&
                        files.srq &&
                        files.srec
                    ) && (
                            <>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: 1,
                                        mb: 1,
                                    }}
                                >
                                    <UploadIcon fontSize="medium" sx={{ color: "#1976d2" }} />

                                    <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
                                        Import/Upload {uploadTextMap[selectedDoc]} Document
                                    </Typography>
                                </Box>
                                <Typography sx={{ fontSize: "13px", color: "gray", mb: 2 }}>
                                    Upload pdf or doc files
                                </Typography>

                                <Button variant="contained" component="label">
                                    Choose File
                                    <input
                                        hidden
                                        type="file"
                                        accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf,.doc,.docx"
                                        onChange={handleFileUpload}
                                    />
                                </Button>
                            </>
                        )}
                </Box>
            </Paper>


            {/* SECTION 3 */}
            <Paper sx={{ p: 3, mb: 4 }} elevation={0}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    Additional Information
                </Typography>

                <TextField
                    fullWidth
                    label="Client Name"
                    variant="outlined"
                    sx={{ mb: 3 }}
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    error={!!errors.clientName}
                    helperText={errors.clientName}
                />

                <TextField
                    fullWidth
                    label="Application Name"
                    variant="outlined"
                    required
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    error={!!errors.appName}
                    helperText={errors.appName}
                />
            </Paper>

            <Box textAlign="right">
                <Button
                    variant="contained"
                    sx={{
                        px: 4,
                        background: "#0094f5",
                        textTransform: "none",
                        fontSize: "16px",
                    }}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
}
