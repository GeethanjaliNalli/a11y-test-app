import React from "react"
import { Card, CardContent, CardFooter } from "@/ShadcnComponents/ui/card"
import { Button } from "@/ShadcnComponents/ui/button"
import { HelpCircle } from "lucide-react"
import BackgroundImage from "../../../assets/AccessibilityTestingImages/Background.png";
import TSGIcon from "../../../assets/AccessibilityTestingImages/TestStrategyGeneration.svg";
import SCRIcon from "../../../assets/AccessibilityTestingImages/StaticCodeRun.svg";
import USVIcon from "../../../assets/AccessibilityTestingImages/UserFlowValidation.svg";

interface Props {
    handleAddNewDetailViewTabRender: (
        id: string,
        tabName: string,
        tabsetId: string,
        eventData: any,
        componentName: string
    ) => void;
}

const AccessibilityTestingLandingPage: React.FC<Props> = ({ handleAddNewDetailViewTabRender }) => {

    const handleWorkFlow = () => {
        handleAddNewDetailViewTabRender(
            '767a0663-aeda-4a83-8667-9b9f016ee742',
            'Static Code Run',
            '06c6b68f-e212-4350-b1b7-0efd5b8c3234',
            '',
            'ConnectRepository'
        );
    }

    const handleTestStrategyWorkFlow = () => {
        handleAddNewDetailViewTabRender(
            '2feee8b8-d198-45d7-bf6d-dfe2aceff4cc',
            'Test Strategy Generation',
            '06c6b68f-e212-4350-b1b7-0efd5b8c3234',
            '',
            'UserStoryInput'
        );
    }

    return (
        <div
            className="flex flex-col items-center px-4 py-4 w-full h-full bg-no-repeat bg-center bg-cover"
            style={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: "500px 400px"
            }}
        >

            {/* Title */}
            <div className="text-center mb-10">
                <h1 className="text-5xl font-semibold text-gray-900 mb-4 mt-10 ">
                    Accessibility Testing
                </h1>

                <p className="text-gray-900 text-lg max-w-2xl mx-auto"
                    style={{ fontFamily: "Manrope, sans-serif" }}>
                    Achieving true digital inclusion so all users can access and
                    interact with the product.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">

                {/* Card 1 */}
                <Card className="text-center shadow-sm hover:shadow-md transition">
                    <CardContent className="pt-10 pb-6 flex flex-col items-center">

                        <img
                            src={TSGIcon}
                            className="w-20 mb-10"
                        />

                        <Button
                            variant="link"
                            className="text-black text-xl"
                            onClick={handleTestStrategyWorkFlow}
                        >
                            Test Strategy Generation
                        </Button>

                        <p className="text-gray-500 text-sm">
                            Define standards and approach
                        </p>
                    </CardContent>
                </Card>

                {/* Card 2 */}
                <Card className="text-center shadow-sm hover:shadow-md transition">
                    <CardContent className="pt-10 pb-6 flex flex-col items-center">

                        <img
                            src={SCRIcon}
                            className="w-20 mb-10"
                        />

                        <Button
                            variant="link"
                            className="text-black text-xl"
                            onClick={handleWorkFlow}
                        >
                            Static Code Run
                        </Button>

                        <p className="text-gray-500 text-sm">
                            Run automated accessibility code scans
                        </p>
                    </CardContent>
                </Card>

                {/* Card 3 */}
                <Card className="text-center shadow-sm hover:shadow-md transition">
                    <CardContent className="pt-10 pb-6 flex flex-col items-center">

                        <img
                            src={USVIcon}
                            className="w-20 mb-10"
                        />

                        <Button
                            variant="link"
                            className="text-black text-xl"
                        >
                            User Flow validation
                        </Button>

                        <p className="text-gray-500 text-sm">
                            Verify if user interactions are accessible
                        </p>
                    </CardContent>
                </Card>

            </div>

            {/* Help */}
            <div className="mt-10 flex items-center gap-2 text-[#0094FB] cursor-pointer hover:underline">
                <span>Need Help</span>
                <HelpCircle size={16} />
            </div>

        </div>
    )
}

export default AccessibilityTestingLandingPage