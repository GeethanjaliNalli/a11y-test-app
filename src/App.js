//App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./components/common-components/ErrorBoundaries";
import {
  GuardedAdminRoute,
  GuardedRagAdminRoute,
  GuardedUserLogin,
  GuardedUserRoute,
} from "./services/authGuard";
import Login from "./components/main-pages/Login";
import LandingPage from "./components/main-pages/LandingPage";
import ServicePage from "./components/main-pages/ServicePage";
import BugReportPage from "./components/main-pages/BugReportPage";
import TestcaseGenerationPage from "./components/main-pages/TestcaseGenerationPage";
import BugReportInputPage from "./components/main-pages/input-pages/BugReportInputPage";
import BugReportOutputPage from "./components/main-pages/output-pages/BugReportOutputPage";
import UserStoryInputPage from "./components/main-pages/input-pages/UserStoryInputPage";
import TestCasesOutputPage from "./components/main-pages/output-pages/TestCasesOutputPage";
import SelectTestingTypesPage from "./components/main-pages/output-pages/SelectTestingTypesPage";
import ForgotPassword from "./components/common-components/ForgotPassword";
import ResetPassword from "./components/common-components/ResetPassword";
import "./App.css";
import TestAutomationPage from "./components/main-pages/TestAutomationPage";
import TestAutomationInputPage from "./components/main-pages/input-pages/TestAutomationInputPage";
import TestAutomationOutputPage from "./components/main-pages/output-pages/TestAutomationOutputPage";
import FeatureFileCreated from "./components/output-components/test-automation/FeatureFilesCreated";
import MultiTestCaseGenerationPage from "./components/main-pages/MultiTestCaseGenerationPage";
import MultipleSelectTestingTypesPage from "./components/main-pages/output-pages/MultipleSelectTestingTypesPage";
import MultipleTestCasesOutputPage from "./components/main-pages/output-pages/MultipleTestCasesOutputPage";
import TestPlanInputForm from "./components/input-components/test-plan/TestPlanInputForm";
import TestPlanOuputComponent from "./components/output-components/test-plan/TestPlanOutputComponent";
import TestPlanPage from "./components/main-pages/TestPlanPage";
import BusinessProcessGuide from "./components/output-components/user-story/BusinessProcessGuide";
import MultiBugReportPage from "./components/main-pages/MultiBugReportPage";
import MultiEnhancedBugOutputPage from "./components/main-pages/output-pages/MultiEnhancedBugOutputPage";
import MultiBugReportsInputPage from "./components/main-pages/input-pages/MultiBugReportsInputPage";
import TestPlanInputPage from "./components/main-pages/input-pages/TestPlanInputPage";
import TestPlanOutputPage from "./components/main-pages/output-pages/TestPlanOutputPage";
import MultiBusinessProcessGuide from "./components/output-components/user-story/MultiBusinessProcessGuide";
import TestCasesInputPage from "./components/main-pages/input-pages/TestCasesInputPage";
import UserStoryMainPage from "./components/main-pages/UserStoryMainPage";
import UserStoryOutputPage from "./components/main-pages/output-pages/UserStoryOutputPage";
import MutlipleUserStoryPage from "./components/main-pages/MultipleUserStoryPage";
import MultiUserStoryOutputPage from "./components/main-pages/output-pages/MultiUserStoryOutputPage";
import SelectFrameWork from "./components/main-pages/input-pages/SelectFrameWork";
import TestAutomationLandingPage from "./components/main-pages/output-pages/test-automation/pages/TestAutomationLandingPage.js";
import ConfigurePreferencesPage from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/common-pages/ConfigurePreferencesPage.js";
import SetTestEnvironmentPage from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/common-pages/SetTestEnvironmentPage.js";
import TestCasesPage from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/common-pages/TestCasesPage.js";
import TestCaseImportedPage from "./components/main-pages/output-pages/test-automation/playwright-typescript/TestCaseImportedPage";
import IntroduceSUTPage from "./components/main-pages/output-pages/test-automation/playwright-typescript/IntroduceSUTPage";
import GenerateLocatorsPage from "./components/main-pages/output-pages/test-automation/playwright-typescript/GenerateLocatorsPage";
import GeneratePageObjectsPage from "./components/main-pages/output-pages/test-automation/playwright-typescript/GeneratePageObjectsPage";
import GenerateTestFilesPage from "./components/main-pages/output-pages/test-automation/playwright-typescript/GenerateTestFilesPage";
import CSharpOutputPage from "./components/main-pages/output-pages/CSharpOutputPage";
import PlayWrightCSharpOutputPage from "./components/main-pages/output-pages/playWrightCSharpOutputPage";
import PlayWrightJavaOutputPage from "./components/main-pages/output-pages/PlaywrightJavaOutputPage";
import PlayWrightTypeScriptOutputPage from "./components/main-pages/output-pages/PlaywrightTypeScriptOutputPage.js";

import PlaywrightJavaModifiedTestCaseOutputPage from "./components/main-pages/output-pages/PlaywrightJavaModifiedTestCaseOutputPage";
import RobotFrameWorkOutputPage from "./components/main-pages/output-pages/RobotFrameWorkOutputPage";
import RobotNewProjectOutputPage from "./components/main-pages/output-pages/RobotNewProjectOutputPage";
import JavaSeleniumOutputPage from "./components/main-pages/output-pages/JavaSeleniumOutputPage";
import JavaSeleniumNewProjectOutputPage from "./components/main-pages/output-pages/JavaSeleniumNewProjectOutputPage";
import JavaSeleniumNewTestCaseOutputPage from "./components/main-pages/output-pages/JavaSeleniumNewTestCaseOutputPage";
import UploadBox from "./components/main-pages/input-pages/UploadBox";
import AdminDashboard from "./components/admin-components/summary-page/AdminDashboard";
import AdminPanel from "./components/admin-components/users-page/AdminPanel.js";
import ProjectsList from "./components/admin-components/projects-page/ProjectsList.js";
import BreadcrumNav from "./components/admin-components/admin-navigationRail/BreadcrumbNav.js";
import AdminDBOutputPage from "./components/admin-components/admin-navigationRail/AdminDBOutpuPage.js";
import ApiTestingOutputPage from "./components/main-pages/output-pages/ApiTestingOutputPage";
import TestSummaryReportPage from "./components/main-pages/TestSummaryReportPage";
import SelectionSummaryReportStartingPage from "./components/input-components/test-summary-report/SelectionSummaryReportStartingPage";
import TestSummaryOutputPage from "./components/main-pages/output-pages/TestSummaryOutputPage.js";
import ApiConfiguration from "./components/output-components/api-testing/APIConfiguration";
import APIJavaOutputPage from "./components/main-pages/output-pages/api-testing/APIJavaOutputPage";
import APITestingPage from "./components/main-pages/output-pages/APITestingPage";
import UploadAPISpecs from "./components/output-components/api-testing/UploadAPISpecs.js";
import APINewLandingPage from "./components/main-pages/APINewLandingPage.js";
import APITestCasesDisplayPage from "./components/output-components/api-testing/APITestCasesDisplayPage.js";
import ImportSwaggerURL from "./components/output-components/api-testing/ImportSwaggerURL.js";
import AnalyseLiveWebsite from "./components/output-components/api-testing/AnalyseLiveWebsite.js";
import ManualConfiguration from "./components/output-components/api-testing/ManualConfiguration.js";
import MultiSourceCombination from "./components/output-components/api-testing/MultiSourceCombination.js";
//import PromptLibraryHomePage from "./components/output-components/prompt-library/PromptLibraryHomePage";
// import AdminDashboard from "./components/main-pages/output-pages/adminpages/AdminDashboard";
// // import AdminPanel from "./components/main-pages/output-pages/adminpages/AdminPanel";
// import ProjectsList from "./components/main-pages/output-pages/adminpages/ProjectsList";
// import BreadcrumNav from "./components/main-pages/output-pages/adminpages/BreadcrumbNav";
// import AdminDBOutputPage from "./components/main-pages/output-pages/adminpages/AdminDBOutpuPage";
import RequirementsPhase from "./components/input-components/security-testing/RequirementsPhase";
import IdentifiedFunctionalModules from "./components/output-components/security-testing/IdentifiedFunctionalModules";
import SecurityTestingPage from "./components/main-pages/SecurityTestingPage";
import SecondFunctionalModules from "./components/output-components/security-testing/SecondFunctionalModules";
import DesignPhase from "./components/input-components/security-testing/DesignPhase";
import RequirementOutputPage from "./components/main-pages/output-pages/security-testing/RequirementOutputPage";
import DesignOutputPage from "./components/main-pages/output-pages/security-testing/DesignOutputPage";
import Overall from "./components/admin-components/basic-details/overall";
import ConstructionPhaseOutputPage from "./components/main-pages/output-pages/security-testing/ConstructionPhaseOutputPage";
import SecurityTestingHomePage from "./components/input-components/security-testing/SecurityTestingHomePage";
import DastPhaseOutputPage from "./components/main-pages/output-pages/security-testing/DastPhaseOutputPage";
import SecurityTestPlanHomePage from "./components/input-components/security-testing/SecurityTestPlanHomePage.js"
import SASTTestPlanInputPage from "./components/input-components/security-testing/SASTTestPlanInputPage.js";
import DASTTestPlanInputPage from "./components/input-components/security-testing/DASTTestPlanInputPage.js";
import ComprehensiveTestPlanInputPage from "./components/input-components/security-testing/ComprehensiveTestPlanInputPage.js"


//import KnowledgeBaseSelect from './components/admin-components/knowledge-base/KnowledgeBaseSelect';
//import KnowledgeBaseUpload from './components/admin-components/knowledge-base/KnowledgeBaseUpload';
import ChooseTestCase from "./components/output-components/api-testing/ChooseTestCase.js";
import APITestingLandingPage from "./components/main-pages/APITestingLandingPage.js";
//import CAGLocators from "./components/main-pages/output-pages/CagLocatorsPage.js";
//import CAGLocatorsGeneration from "./components/output-components/cag-locators/cag-loactors-generatorpage.js";
import APIJavaNewTestCaseOutputPage from "./components/main-pages/output-pages/api-testing/APIJavaNewTestCaseOutputPage.js";
import APIJavaModifiedTestCaseOutputPage from "./components/main-pages/output-pages/api-testing/APIJavaModifiedTestCaseOutputPage.js";
import APIUploadTestCases from "./components/output-components/api-testing/APIUploadTestCases.js";

//import FrameworkShiftHomePage from "./components/input-components/framework-shift/FrameworkShiftHomePage.js";
// import FrameworkShiftInputPage from "./components/main-pages/input-pages/FrameworkShiftInputPage.js";
// import ChooseFramework from "./components/input-components/framework-shift/ChooseFramework.js";
// import RepositoryAndConfiguration from "./components/input-components/framework-shift/RepositoryAndConfiguration.js";
// import ConfigurationAndHumanInput from "./components/input-components/framework-shift/ConfigurationAndHumanInput.js";
// import FrameworkSpecificMappings from "./components/input-components/framework-shift/FrameworkSpecificMappings.js";
// import ConversionPreferences from "./components/input-components/framework-shift/ConversionPreferences.js";
// import ConversionInProgress from "./components/input-components/framework-shift/ConversionInProgress.js";
// import ConversionComplete from "./components/input-components/framework-shift/ConversionComplete.js";

import KnowledgeBaseSelect from "./components/admin-components/knowledge-base/KnowledgeBaseSelect";
import KnowledgeBaseUpload from "./components/admin-components/knowledge-base/KnowledgeBaseUpload";
import CAGLocators from "./components/main-pages/output-pages/CagLocatorsPage.js";
import CAGLocatorsGeneration from "./components/output-components/cag-locators/cag-loactors-generatorpage.js";
import BurpSuiteScansComponent from "./components/output-components/security-testing/BurpSuiteScansComponent.js";
import SastInsightsInput from "./components/input-components/security-testing/SASTInsightsInputComponent.js";
import SASTInsightsDashboard from "./components/output-components/security-testing/SASTInsightsComponents/SASTInsightsDashboard.js";
import InsightsAnalysisHomePage from "./components/input-components/security-testing/InsightsAnalysisHomePage.js";
import DASTInsightsInputPage from "./components/input-components/security-testing/DASTInsightsInputPage.js";
import DastInsightsComponent from "./components/output-components/security-testing/DASTInsightsPages/DASTInsightsComponent.js";
import SecurityTestingHome from "./components/input-components/security-testing/SecurityTestingHome.js";
import ProfilePage from "./components/main-pages/ProfilePage";
import PerformanceTestingLandingPage from "./components/input-components/performance-testing/PerformanceTestingLandingPage";
import PerformanceTestingRequirements from "./components/input-components/performance-testing/requirements/PerformanceTestingRequirements";
import PerformanceTestingRequirementsOutput from "./components/output-components/performance-testing/requirements/PerformanceTestingRequirementsOutput";

import GithubConfigurationForm from "./components/output-components/test-automation/GitCredentialsPage";
import RobotNewUserStoryExistingProjectOutputPage from "./components/main-pages/output-pages/RobotNewUserStoryExistingProjectOutputPage";
import RobotExistingUserStoryExistingProjectOutputPage from "./components/main-pages/output-pages/RobotExistingUserStoryExistingProjectOutputPage";
import NewProjectGitCredentialsPage from "./components/output-components/test-automation/NewProjectGitCredentialsPage";
import NewProjectBitBucketCredentialsPage from "./components/output-components/test-automation/NewProjectBitBucketCredentialsPage";
import PlayWrightCSharpNewProjectOutputPage from "./components/main-pages/output-pages/PlayWrightCSharpNewProjectOutputPage";
import PlayWrightCSharpNewTestCaseOutputPage from "./components/main-pages/output-pages/PlayWrightCSharpNewTestCaseOutputPage";
import PlayWrightJavaNewProjectOutputPage from "./components/main-pages/output-pages/PlaywrightJavaNewProjectOutputPages.js";
import PlayWrightJavaNewTestCaseOutputPage from "./components/main-pages/output-pages/PlaywrightJavaNewTestCaseOutputPages.js";
import PlayWrightTypescriptNewProjectOutputPage from "./components/main-pages/output-pages/PlaywrightTypescriptNewProjectOutputPages.js";

import SeleniumCsharpNewProjectOutputPage from "./components/main-pages/output-pages/SeleniumCsharpNewProjectOutputPage";
import SeleniumCSharpNewTestCaseExistingProjectOutputPage from "./components/main-pages/output-pages/SeleniumCSharpNewTestCaseExistingProjectOutputPage";
import JavaSeleniumModifiedTestCaseOutputPage from "./components/main-pages/output-pages/JavaSeleniumModifiedTestCaseOutputPage";
import CypressJavaScriptOutputPage from "./components/main-pages/output-pages/CypressJavaScriptOutputPage";
import CypressJavaScriptNewProjectOutputPage from "./components/main-pages/output-pages/CypressJavaScriptNewProjectOutputPage";
import CypressJavaScriptNewTestCaseOutputPage from "./components/main-pages/output-pages/CypressJavaScriptNewTestCaseOutputPage";
import CypressJavaScriptModifiedTestCaseOutputPage from "./components/main-pages/output-pages/CypressJavaScriptModifiedTestCaseOutputPage";
import JavaTestngNewProjectOutputPage from "./components/main-pages/output-pages/JavaTestngNewProjectOutputPage.js";

import JavaSeleniumTestNGNewTestcaseOutputPages from "./components/main-pages/output-pages/JavaSeleniumTestNGNewTestcaseOutputPages.js";
import QEStrategyHomePage from "./components/input-components/qe-strategy/qe-strategy-homepage/QEStrategyHomePage.js";
import UploadDocuments from "./components/input-components/qe-strategy/qe-strategy-homepage/UploadDocuments.js";
import EmailCommunications from "./components/input-components/qe-strategy/qe-strategy-homepage/EmailCommunications.js";
import WebsiteAnalysis from "./components/input-components/qe-strategy/qe-strategy-homepage/WebsiteAnalysis.js";
import QEStrategyMainPage from "./components/main-pages/QEStrategyMainPage.js";
import QEStrategyInputPage from "./components/main-pages/input-pages/QEStrategyInputPage.js";
import ArchetypeUI from "./components/input-components/qe-strategy/profiling-layer/ProfilingLayer.js";

import APIGithubConfiguration from "../src/components/output-components/api-testing/Api-gitCredentailspage.js";

import ManualConfigForMultiSource from "./components/output-components/api-testing/ManualConfigForMultiSource.js";
import EndpointsDisplayPage from "./components/output-components/api-testing/EndpointsDisplayPage.js";

// import TestAutomationPageLandingPage from "../src/components/main-pages/input-pages/test-automation/TestAutomationLandingPage"
// import TestAutomationLandingPage from "./components/main-pages/input-pages/test-automation/TestAutomationLandingPage";

import TermsOfUse from "./components/main-pages/TermOfUse.js";
import PrivacyPolicy from "./components/main-pages/PrivacyPolicy.js";
import AdminAccountConfiguration from "./components/common-components/AccountConfiguration.js";
import UserConfiguration from "./components/common-components/UserConfiguration.js";
import Mapping from "./components/common-components/Mapping.js";
import { SuggestedQEPillars } from "./components/input-components/qe-strategy/advisory-layer/SuggestedQEPillars.js";
import { SelectedQEPillars } from "./components/input-components/qe-strategy/advisory-layer/SelectedQEPillars.js";
import { Top5QEPillars } from "./components/input-components/qe-strategy/advisory-layer/Top5QEPillars.js";
import ArchetypePrefernce from "./components/input-components/qe-strategy/profiling-layer/HITLComponent.js";
import { QEPillars } from "./components/input-components/qe-strategy/advisory-layer/QEPillars.js";

import NotFoundPage from "./components/common-components/NotFound/NotFoundPage.js";
import PlaywrightCSharpReqnrollNTNP from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/frameworks/Playwright/CSharp/ReqNRoll/new-testcase-new-project/PlaywrightCSharpReqnrollNTNP.js";
import ReqNRollTestCaseImportedPage from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/frameworks/Playwright/CSharp/ReqNRoll/new-testcase-new-project/ReqNRollTestCaseImportedPage.js";
import ReqNRollFeatureFilePage from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/frameworks/Playwright/CSharp/ReqNRoll/new-testcase-new-project/ReqNRollFeatureFilePage.js";
import ReqNRollDOMPage from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/frameworks/Playwright/CSharp/ReqNRoll/new-testcase-new-project/ReqNRollDOMPage.js";
import ReqNRollLocators from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/frameworks/Playwright/CSharp/ReqNRoll/new-testcase-new-project/ReqNRollLocators.js";
import ReqNRollPageClass from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/frameworks/Playwright/CSharp/ReqNRoll/new-testcase-new-project/ReqNRollPageClass.js";
import ReqNRollStepDefinition from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/frameworks/Playwright/CSharp/ReqNRoll/new-testcase-new-project/ReqNRollStepDefinition.js";

// Playwright CSharp imports
import PlaywrightCSharpSpecflowNTNP from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/frameworks/Playwright/CSharp/specflow/new-testcase-new-project/PlaywrightCSharpSpecflowNTNP.js";
import TestCaseImportedPlaywrightCSharpSpecflow from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/frameworks/Playwright/CSharp/specflow/new-testcase-new-project/TestCasesImportedPage.js";
import FeatureFilePagePlaywrightCSharpSpecflow from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/frameworks/Playwright/CSharp/specflow/new-testcase-new-project/FeatureFilePagePlaywrightCSharpSpecflow.js";
import DOMPagePlaywrightCSharpSpecflow from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/frameworks/Playwright/CSharp/specflow/new-testcase-new-project/DOMPagePlaywrightCSharpSpecflow.js";
import LocatorsPagePlaywrightCSharpSpecflow from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/frameworks/Playwright/CSharp/specflow/new-testcase-new-project/LocatorsPagePlaywrightCSharpSpecflow.js";
import PageClassesPlaywrightCSharpSpecflow from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/frameworks/Playwright/CSharp/specflow/new-testcase-new-project/PageClassesPlaywrightCSharpSpecflow.js";
import StepDefinitionPlaywrightCSharpSpecflow from "./components/main-pages/output-pages/test-automation/capabilities/Web-Automation/frameworks/Playwright/CSharp/specflow/new-testcase-new-project/StepDefinitionPlaywrightCSharpSpecflow.js";
import SASTTestPlan from "./components/output-components/security-testing/SASTTestPlan.js";
import DASTTestPlan from "./components/output-components/security-testing/DASTTestPlan.js";
import ComprehensiveTestPlan from "./components/output-components/security-testing/ComprehensiveTestPlan.js";


function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route element={<GuardedUserRoute />}>
            <Route path="/landingpage" element={<LandingPage />} />

            <Route
              path="/featurefilescreated"
              element={<FeatureFileCreated />}
            />

            <Route path="/dashboard" element={<ServicePage />}>
              <Route
                path="/dashboard/admin-navigation"
                element={<AdminDBOutputPage />}
              >
                {/* Admin routes (no knowledgebase) */}
                <Route element={<GuardedAdminRoute />}>
                  <Route
                    path="/dashboard/admin-navigation/adminDashboard"
                    element={<AdminDashboard />}
                  />
                  <Route
                    path="/dashboard/admin-navigation/projects-list"
                    element={<ProjectsList />}
                  />
                  <Route
                    path="/dashboard/admin-navigation/users-list"
                    element={<AdminPanel />}
                  />
                  <Route
                    path="/dashboard/admin-navigation/overall"
                    element={<Overall />}
                  />
                </Route>

                {/* Knowledgebase routes only for rag_admin and super_admin */}
                <Route element={<GuardedRagAdminRoute />}>
                  <Route
                    path="/dashboard/admin-navigation/knowledgebase"
                    element={<KnowledgeBaseSelect />}
                  />
                  <Route
                    path="/dashboard/admin-navigation/knowledgebase/upload"
                    element={<KnowledgeBaseUpload />}
                  />
                </Route>

                <Route
                  path="/dashboard/admin-navigation/settings"
                  element={<UserConfiguration />}
                />
                <Route
                  path="/dashboard/admin-navigation/admin-settings"
                  element={<AdminAccountConfiguration />}
                />
                <Route
                  path="/dashboard/admin-navigation/field-mapping"
                  element={<Mapping />}
                />
              </Route>

              {/* Profile Page Route */}
              <Route path="/dashboard/profile" element={<ProfilePage />} />

              <Route
                path="/dashboard/userstory"
                element={<UserStoryMainPage />}
              >
                <Route
                  path="/dashboard/userstory/input"
                  element={<UserStoryInputPage />}
                />
                <Route
                  path="/dashboard/userstory/output"
                  element={<UserStoryOutputPage />}
                />
                <Route
                  path="/dashboard/userstory/output/businessProcessGuide"
                  element={<BusinessProcessGuide />}
                />
              </Route>

              <Route
                path="/dashboard/multi-userstory"
                element={<MutlipleUserStoryPage />}
              >
                <Route
                  path="/dashboard/multi-userstory/output"
                  element={<MultiUserStoryOutputPage />}
                />
                <Route
                  path="/dashboard/multi-userstory/output/multiBusinessProcessGuide"
                  element={<MultiBusinessProcessGuide />}
                />
              </Route>

              <Route
                path="/dashboard/generate-testcases"
                element={<TestcaseGenerationPage />}
              >
                <Route
                  path="/dashboard/generate-testcases/input"
                  element={<TestCasesInputPage />}
                />
                <Route
                  path="/dashboard/generate-testcases/output"
                  element={<TestCasesOutputPage />}
                />
                <Route
                  path="/dashboard/generate-testcases/select-testing-types"
                  element={<SelectTestingTypesPage />}
                />
                <Route
                  path="/dashboard/generate-testcases/output/businessProcessGuide"
                  element={<BusinessProcessGuide />}
                />
              </Route>
              <Route
                path="/dashboard/generate-multi/testcases"
                element={<MultiTestCaseGenerationPage />}
              >
                <Route
                  path="/dashboard/generate-multi/testcases/select-testing-types"
                  element={<MultipleSelectTestingTypesPage />}
                />
                <Route
                  path="/dashboard/generate-multi/testcases/output"
                  element={<MultipleTestCasesOutputPage />}
                />
                <Route
                  path="/dashboard/generate-multi/testcases/output/multiBusinessProcessGuide"
                  element={<MultiBusinessProcessGuide />}
                />
              </Route>
              <Route
                path="/dashboard/test-automation"
                element={<TestAutomationPage />}
              >
                <Route
                  path="/dashboard/test-automation"
                  element={<TestAutomationLandingPage />}
                />
                <Route
                  path="/dashboard/test-automation/configure-preferences"
                  element={<ConfigurePreferencesPage />}
                />
                <Route
                  path="/dashboard/test-automation/set-environment"
                  element={<SetTestEnvironmentPage />}
                />
                <Route
                  path="/dashboard/test-automation/test-cases"
                  element={<TestCasesPage />}
                />
                {/* Playwright C# ReqNRoll */}
                <Route
                  path="/dashboard/test-automation/playwright-csharp-reqnroll/ntnp"
                  element={<PlaywrightCSharpReqnrollNTNP />}
                >
                  <Route
                    path="test-case-imported"
                    element={<ReqNRollTestCaseImportedPage />}
                  />
                  <Route
                    path="feature-file"
                    element={<ReqNRollFeatureFilePage />}
                  />
                  <Route path="page-dom" element={<ReqNRollDOMPage />} />
                  <Route path="locators" element={<ReqNRollLocators />} />
                  <Route path="page-class" element={<ReqNRollPageClass />} />
                  <Route
                    path="step-definition"
                    element={<ReqNRollStepDefinition />}
                  />
                </Route>

                {/* Playwirght C# specflow */}
                <Route
                  path="playwright-csharp-specflow/ntnp"
                  element={<PlaywrightCSharpSpecflowNTNP />}
                >
                  <Route
                    path="test-case-imported"
                    element={<TestCaseImportedPlaywrightCSharpSpecflow />}
                  />
                  <Route
                    path="feature-file"
                    element={<FeatureFilePagePlaywrightCSharpSpecflow />}
                  />
                  <Route
                    path="page-dom"
                    element={<DOMPagePlaywrightCSharpSpecflow />}
                  />
                  <Route
                    path="locators"
                    element={<LocatorsPagePlaywrightCSharpSpecflow />}
                  />
                  <Route
                    path="page-class"
                    element={<PageClassesPlaywrightCSharpSpecflow />}
                  />
                  <Route
                    path="step-definition"
                    element={<StepDefinitionPlaywrightCSharpSpecflow />}
                  />
                </Route>

                <Route
                  path="/dashboard/test-automation/SelectFrameWork"
                  element={<SelectFrameWork />}
                />

                <Route
                  path="/dashboard/test-automation/GitCredentialsPage"
                  element={<GithubConfigurationForm />}
                />
                <Route
                  path="/dashboard/test-automation/newproject-gitcredentials"
                  element={<NewProjectGitCredentialsPage />}
                />
                <Route
                  path="/dashboard/test-automation/newproject-bitbucketcredentials"
                  element={<NewProjectBitBucketCredentialsPage />}
                />
                {/* <Route path="/dashboard/test-automation/UploadBox" element={<UploadBox/>} /> */}
                <Route
                  path="/dashboard/test-automation/selenium-java"
                  element={<JavaSeleniumOutputPage />}
                >
                  <Route
                    path="/dashboard/test-automation/selenium-java/newproject"
                    element={<JavaSeleniumNewProjectOutputPage />}
                  />
                  <Route
                    path="/dashboard/test-automation/selenium-java/new-test-case"
                    element={<JavaSeleniumNewTestCaseOutputPage />}
                  />
                  <Route
                    path="/dashboard/test-automation/selenium-java/modified-test-case"
                    element={<JavaSeleniumModifiedTestCaseOutputPage />}
                  />
                </Route>
                <Route
                  path="/dashboard/test-automation/playwright-java"
                  element={<PlayWrightJavaOutputPage />}
                >
                  <Route
                    path="/dashboard/test-automation/playwright-java/newproject"
                    element={<PlayWrightJavaNewProjectOutputPage />}
                  />
                  <Route
                    path="/dashboard/test-automation/playwright-java/new-test-case"
                    element={<PlayWrightJavaNewTestCaseOutputPage />}
                  />
                  <Route
                    path="/dashboard/test-automation/playwright-java/modified-test-case"
                    element={<PlaywrightJavaModifiedTestCaseOutputPage />}
                  />
                </Route>

                <Route
                  path="/dashboard/test-automation/playwright-typescript"
                  element={<PlayWrightTypeScriptOutputPage />}
                >
                  <Route
                    path="/dashboard/test-automation/playwright-typescript/new-test-case"
                    element={<PlayWrightTypescriptNewProjectOutputPage />}
                  />
                </Route>

                <Route
                  path="/dashboard/test-automation/robot-framework"
                  element={<RobotFrameWorkOutputPage />}
                >
                  <Route
                    path="/dashboard/test-automation/robot-framework/newproject"
                    element={<RobotNewProjectOutputPage />}
                  />
                  <Route
                    path="/dashboard/test-automation/robot-framework/new-userstory"
                    element={<RobotNewUserStoryExistingProjectOutputPage />}
                  />
                  <Route
                    path="/dashboard/test-automation/robot-framework/existing-userstory"
                    element={
                      <RobotExistingUserStoryExistingProjectOutputPage />
                    }
                  />
                </Route>
                <Route
                  path="/dashboard/test-automation/c-sharp"
                  element={<CSharpOutputPage />}
                >
                  <Route
                    path="/dashboard/test-automation/c-sharp/newproject"
                    element={<SeleniumCsharpNewProjectOutputPage />}
                  />
                  <Route
                    path="/dashboard/test-automation/c-sharp/new-test-case"
                    element={
                      <SeleniumCSharpNewTestCaseExistingProjectOutputPage />
                    }
                  />
                </Route>
                <Route
                  path="/dashboard/test-automation/playwright-c-sharp"
                  element={<PlayWrightCSharpOutputPage />}
                >
                  <Route
                    path="/dashboard/test-automation/playwright-c-sharp/newproject"
                    element={<PlayWrightCSharpNewProjectOutputPage />}
                  />
                  <Route
                    path="/dashboard/test-automation/playwright-c-sharp/new-test-case"
                    element={<PlayWrightCSharpNewTestCaseOutputPage />}
                  />
                  <Route
                    path="/dashboard/test-automation/playwright-c-sharp/newproject"
                    element={<PlayWrightCSharpNewProjectOutputPage />}
                  />
                  <Route
                    path="/dashboard/test-automation/playwright-c-sharp/new-test-case"
                    element={<PlayWrightCSharpNewTestCaseOutputPage />}
                  />
                </Route>
                <Route
                  path="/dashboard/test-automation/cypress-javascript"
                  element={<CypressJavaScriptOutputPage />}
                >
                  <Route
                    path="/dashboard/test-automation/cypress-javascript/newproject"
                    element={<CypressJavaScriptNewProjectOutputPage />}
                  />
                  <Route
                    path="/dashboard/test-automation/cypress-javascript/new-test-case"
                    element={<CypressJavaScriptNewTestCaseOutputPage />}
                  />
                  <Route
                    path="/dashboard/test-automation/cypress-javascript/modified-test-case"
                    element={<CypressJavaScriptModifiedTestCaseOutputPage />}
                  />
                </Route>

                <Route
                  path="/dashboard/test-automation/java-testng/new-test-case"
                  element={<JavaSeleniumTestNGNewTestcaseOutputPages />}
                />
                {/* Playwright TypeScript Routes */}

                <Route
                  path="/dashboard/test-automation/playwright-typescript-mocha/ntnp"
                  element={<PlayWrightTypeScriptOutputPage />}
                >
                  <Route
                    path="test-case-imported"
                    element={<TestCaseImportedPage />}
                  />
                  <Route path="introduce-sut" element={<IntroduceSUTPage />} />
                  <Route
                    path="generate-locators"
                    element={<GenerateLocatorsPage />}
                  />
                  <Route
                    path="generate-page-objects"
                    element={<GeneratePageObjectsPage />}
                  />
                  <Route
                    path="generate-test-files"
                    element={<GenerateTestFilesPage />}
                  />
                </Route>

                {/* <Route path="/dashboard/test-automation/input" element={<TestAutomationInputPage />} />
              <Route path="/dashboard/test-automation/output" element={<TestAutomationOutputPage />} /> */}

                <Route>
                  <Route
                    path="/dashboard/test-automation/java-testng/newproject"
                    element={<JavaTestngNewProjectOutputPage />}
                  />
                </Route>
              </Route>
              {/* <Route
              path="/dashboard/jira-settings"
              element={<AccountManagement />}
              /> */}

              <Route path="/dashboard/api-testing" element={<APITestingPage />}>
                <Route
                  path="/dashboard/api-testing/landingpage"
                  element={<APINewLandingPage />}
                />
                <Route
                  path="/dashboard/api-testing/uploadspecs"
                  element={<UploadAPISpecs />}
                />
                <Route
                  path="/dashboard/api-testing/test-cases-display"
                  element={<APITestCasesDisplayPage />}
                />
                <Route
                  path="/dashboard/api-testing/import-swagger"
                  element={<ImportSwaggerURL />}
                />
                <Route
                  path="/dashboard/api-testing/analyse-website"
                  element={<AnalyseLiveWebsite />}
                />
                <Route
                  path="/dashboard/api-testing/manual-configuration"
                  element={<ManualConfiguration />}
                />
                <Route
                  path="/dashboard/api-testing/multi-source-combination"
                  element={<MultiSourceCombination />}
                />
                <Route
                  path="/dashboard/api-testing/manual-multisource"
                  element={<ManualConfigForMultiSource />}
                />
                <Route
                  path="/dashboard/api-testing/endpoints-display"
                  element={<EndpointsDisplayPage />}
                />

                <Route
                  path="/dashboard/api-testing/flow-selection"
                  element={<APITestingLandingPage />}
                />
                <Route
                  path="/dashboard/api-testing/manual"
                  element={<ApiTestingOutputPage />}
                />
                <Route
                  path="/dashboard/api-testing/api-automation"
                  element={<ApiConfiguration />}
                />

                <Route
                  path="/dashboard/api-testing/java/new-project"
                  element={<APIJavaOutputPage />}
                />
                <Route
                  path="/dashboard/api-testing/java/new-test-case"
                  element={<APIJavaNewTestCaseOutputPage />}
                />
                <Route
                  path="/dashboard/api-testing/java/modified-test-case"
                  element={<APIJavaModifiedTestCaseOutputPage />}
                />

                <Route
                  path="/dashboard/api-testing/uploadapi"
                  element={<APIUploadTestCases />}
                />
                {/* <Route path="/dashboard/api-testing/java" element={<APIJavaOutputPage />} /> */}
                <Route
                  path="/dashboard/api-testing/choose-testcase"
                  element={<ChooseTestCase />}
                />
              </Route>
              <Route
                path="/dashboard/api-testing/newProjectGitCredentails"
                element={<NewProjectGitCredentialsPage />}
              />
              <Route
                path="/dashboard/api-testing/GitCredentialsPage"
                element={<APIGithubConfiguration />}
              />

              <Route path="/dashboard/cag-locators" element={<CAGLocators />}>
                <Route
                  path="/dashboard/cag-locators/cag-locators-generation"
                  element={<CAGLocatorsGeneration />}
                />
              </Route>

              {/* Single Bug Report Enhancer */}
              <Route
                path="/dashboard/bugreportenhancer"
                element={<BugReportPage />}
              >
                <Route
                  path="/dashboard/bugreportenhancer/input"
                  element={<BugReportInputPage />}
                />
                <Route
                  path="/dashboard/bugreportenhancer/output"
                  element={<BugReportOutputPage />}
                />
              </Route>

              {/* Multi Bug Report Enhancer */}
              <Route
                path="/dashboard/multi-bugreports"
                element={<MultiBugReportPage />}
              >
                <Route
                  path="/dashboard/multi-bugreports/input"
                  element={<MultiBugReportsInputPage />}
                />
                <Route
                  path="/dashboard/multi-bugreports/output"
                  element={<MultiEnhancedBugOutputPage />}
                />
              </Route>

              {/******* Test Summary Report Page *******/}
              <Route
                path="/dashboard/summary-reports"
                element={<SelectionSummaryReportStartingPage />}
              />
              <Route
                path="/dashboard/sprint-summary-report"
                element={<TestSummaryReportPage />}
              >
                <Route
                  path="/dashboard/sprint-summary-report/output"
                  element={<TestSummaryOutputPage />}
                />
              </Route>

              {/*********** QE STRATEGY ROUTES ***********/}
              <Route
                path="/dashboard/qe-strategy/home-page"
                element={<QEStrategyHomePage />}
              />
              <Route
                path="/dashboard/qe-strategy/upload-documents"
                element={<UploadDocuments />}
              />
              <Route
                path="/dashboard/qe-strategyarchetype-predicted/archetype-preferences"
                element={<ArchetypePrefernce />}
              />
              <Route
                path="/dashboard/qe-strategy/email-communications"
                element={<EmailCommunications />}
              />
              <Route
                path="/dashboard/qe-strategy/website-analysis"
                element={<WebsiteAnalysis />}
              />
              <Route
                path="/dashboard/qe-strategy/archetype-predicted"
                element={<ArchetypeUI />}
              />
              <Route
                path="/dashboard/qe-strategy"
                element={<QEStrategyMainPage />}
              >
                <Route
                  path="/dashboard/qe-strategy"
                  element={<QEStrategyInputPage />}
                />
                <Route
                  path="/dashboard/qe-strategy/home-page"
                  element={<QEStrategyHomePage />}
                />
                <Route
                  path="/dashboard/qe-strategy/advisory-layer"
                  element={<QEPillars />}
                />

                <Route
                  path="/dashboard/qe-strategy/advisory-layer/preferences"
                  element={<SuggestedQEPillars />}
                />

                <Route
                  path="/dashboard/qe-strategy/advisory-layer/selected-pillars"
                  element={<SelectedQEPillars />}
                />

                <Route
                  path="/dashboard/qe-strategy/advisory-layer/top5-pillars"
                  element={<Top5QEPillars />}
                />
              </Route>

              {/*********** Framework Shift*************/}
              {/* 
              <Route
                path="/dashboard/framework-shift"
                element={<FrameworkShiftInputPage />}
              /> */}

              {/* <Route
                path="/dashboard/framework-shift/home-page"
                element={<FrameworkShiftHomePage />}
              />

              <Route
                path="/dashboard/framework-shift/choose-framework"
                element={<ChooseFramework/>}
              />

              <Route
                path="/dashboard/framework-shift/repository-configuration"
                element={<RepositoryAndConfiguration/>}
              />

              <Route
                path="/dashboard/framework-shift/configuration-and-human-input"
                element={<ConfigurationAndHumanInput/>}
              />

              <Route
                path="/dashboard/framework-shift/framework-specific-mappings"
                element={<FrameworkSpecificMappings/>}
              />

              <Route
                path="/dashboard/framework-shift/conversion-preferences-quality-standards"
                element={<ConversionPreferences/>}
              />

              <Route
                path="/dashboard/framework-shift/conversion-in-progress"
                element={<ConversionInProgress/>}
              />

              <Route
                path="/dashboard/framework-shift/conversion-complete"
                element={<ConversionComplete/>}
              /> */}

              {/******* TEST PLAN ROUTES ********/}
              <Route path="/dashboard/test-plan" element={<TestPlanPage />}>
                <Route
                  path="/dashboard/test-plan"
                  element={<TestPlanInputPage />}
                />
                <Route
                  path="/dashboard/test-plan/output"
                  element={<TestPlanOutputPage />}
                />
              </Route>

              {/******* Security Testing Routes ********/}
              <Route
                path="/dashboard/security-testing/home-page"
                element={<SecurityTestingHomePage />}
              />
              <Route path="security-testing" element={<SecurityTestingPage />}>
                <Route path="input" element={<RequirementOutputPage />} />
                <Route
                  path="requirement-output"
                  element={<RequirementOutputPage />}
                />
                <Route
                  path="functional-modules"
                  element={<IdentifiedFunctionalModules />}
                />
                <Route
                  path="identified-modules"
                  element={<SecondFunctionalModules />}
                />
                <Route
                  path="design-phase-output"
                  element={<DesignOutputPage />}
                />
                <Route
                  path="security-test-plan-home-page"
                  element={<SecurityTestPlanHomePage />}
                />

                <Route
                  path="sast-test-plan-input-page"
                  element={<SASTTestPlanInputPage />}
                />
                <Route
                  path="/dashboard/security-testing/sast-test-plan"
                  element={<SASTTestPlan />}
                />
                <Route
                  path="dast-test-plan-input-page"
                  element={<DASTTestPlanInputPage />}
                />
                <Route
                  path="/dashboard/security-testing/dast-test-plan"
                  element={<DASTTestPlan />}
                />
                <Route
                  path="comprehensive-test-plan-input-page"
                  element={<ComprehensiveTestPlanInputPage />}
                />
                <Route
                  path="/dashboard/security-testing/comprehensive-test-plan"
                  element={<ComprehensiveTestPlan />}
                />

                {/*****  SAST phase *****/}
                <Route
                  path="/dashboard/security-testing/construction-phase"
                  element={<ConstructionPhaseOutputPage />}
                />

                {/*******  DAST Phase *******/}
                <Route
                  path="/dashboard/security-testing/dast-phase"
                  element={<DastPhaseOutputPage />}
                />
                <Route
                  path="/dashboard/security-testing/burpsuite-scan-dashboard"
                  element={<BurpSuiteScansComponent />}
                />

                {/* SAST INSIGHTS */}
                <Route
                  path="/dashboard/security-testing/insights-analysis-page"
                  element={<InsightsAnalysisHomePage />}
                />
                <Route
                  path="/dashboard/security-testing/sast-insights-input"
                  element={<SastInsightsInput />}
                />
                <Route
                  path="/dashboard/security-testing/sast-insights-dashboard"
                  element={<SASTInsightsDashboard />}
                />

                {/* DAST INSIGHTS */}
                <Route
                  path="/dashboard/security-testing/dast-insights-input"
                  element={<DASTInsightsInputPage />}
                />
                <Route
                  path="/dashboard/security-testing/dast-insights-dashboard"
                  element={<DastInsightsComponent />}
                />
              </Route>

              {/******* Performance Testing Routes ********/}
              {/* <Route
                path="/dashboard/performance-testing"
                element={<PerformanceTestingLandingPage />}
              >
                <Route
                  path="/dashboard/performance-testing/requirements"
                  element={<PerformanceTestingRequirements />}
                />
              </Route>
              <Route
                path="/dashboard/performance-testing/output"
                element={<PerformanceTestingRequirementsOutput />}
              /> */}
            </Route>
          </Route>

          {/******* Routes Before Login *******/}
          <Route element={<GuardedUserLogin />}>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}
export default App;