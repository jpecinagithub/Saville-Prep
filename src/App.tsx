import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { LangProvider } from "./context/LangContext";
import { Layout } from "./components/Layout";
import { Landing } from "./pages/Landing";
import { WhichTest } from "./pages/WhichTest";
import { Overview } from "./pages/Overview";
import { Learn } from "./pages/Learn";
import { Practice } from "./pages/Practice";
import { MockIntro } from "./pages/mock/MockIntro";
import { MockRun } from "./pages/mock/MockRun";
import { MockResults } from "./pages/mock/MockResults";
import { MockReview } from "./pages/mock/MockReview";
import { QuickMaths } from "./pages/QuickMaths";
import { DiagramTrainer } from "./pages/DiagramTrainer";
import { History } from "./pages/History";
import { Plan } from "./pages/Plan";
import { ExamDay } from "./pages/ExamDay";
import { Sources } from "./pages/Sources";

export function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/which-test" element={<WhichTest />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/quick-maths" element={<QuickMaths />} />
            <Route path="/diagram-trainer" element={<DiagramTrainer />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/mock" element={<MockIntro />} />
            <Route path="/mock/run" element={<MockRun />} />
            <Route path="/mock/result" element={<MockResults />} />
            <Route path="/mock/review" element={<MockReview />} />
            <Route path="/history" element={<History />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/exam-day" element={<ExamDay />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
        <Analytics />
      </BrowserRouter>
    </LangProvider>
  );
}
