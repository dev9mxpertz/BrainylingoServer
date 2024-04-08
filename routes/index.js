var express = require("express");
var router = express.Router();
const {
  createAdventure,
  getAllAdventures,
  getAdventureById,
  fetchCompletedAdventure,
  fetchInProgressAdventure,
  fetchNewAdventure,
  updateAdventure,
  deleteAdventure,
  createFantasy,
  fetchNewFantasy,
  fetchInProgressFantasy,
  fetchCompletedFantasy,
  getAllFantasy,
  getFantasyById,
  deleteFantasy,
  updateFantasy,
  createHistoryfiction,
  getAllHistoryfiction,
  fetchNewHistoryfiction,
  fetchInProgressHistoryfiction,
  fetchCompletedHistoryfiction,
  deleteHistoryfiction,
  updateHistoryfiction,
  getHistoryfictionById,
  createSciencefiction,
  fetchNewSciencefiction,
  fetchInProgressSciencefiction,
  fetchCompletedSciencefiction,
  deleteSciencefiction,
  updateSciencefiction,
  createSportfiction,
  getAllSportfiction,
  getSportfictionById,
  updateSportfiction,
  deleteSportfiction,
  fetchCompletedSportfiction,
  fetchInProgressSportfiction,
  fetchNewSportfiction,
  createMystery,
  getAllMystery,
  getMysteryById,
  updateMystery,
  deleteMystery,
  fetchCompletedMystery,
  fetchInProgressMystery,
  fetchNewMystery,
  imageupload,
  getAllSciencefiction,
  getSciencefictionById,
  Signup_admin,
  Signin_user,
  Signup,
  currentAdmin,
  signout,
  FindUsername,
  MatchOTP,
  Reset_Password,
  createQuestion,
  getAllQuestions,
  getQuestionByStudentIdAndQuestionId,
  updateQuestionByStudentIdAndQuestionId,
  deleteQuestion,
  Fetch_Daily_Quiz_Data,
  FetchAllUsers,
  updateUserProfile,
  Get_Weekly_Performance_of_Student,
  Get_Weekly_Performance_of_Student_All,
  CreateProgress,

Get_Daily_Quiz_Questions,
Fetch_WeeklyPerformace_Data,
Fetch_LeaderBoardData_For_Current_Weeked,
Update_Questions,
    // Create_Progress,
} = require("../controllers/indexControllers");
const multer = require("multer");
const isAuthorizedUser = require("../middleware/auth");

// Multer setup for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/api/update-image", upload.single("image"), imageupload);

router.post("/api/Signup_admin", Signup_admin);

router.post("/api/Signin_user", Signin_user);

router.post("/api/updateUprofile", updateUserProfile);

router.post("/api/Signup", Signup);

router.post("/api/me", isAuthorizedUser, currentAdmin);

router.get("/api/signout", signout);

router.post("/api/FindUsername", FindUsername);

router.post("/api/MatchOTP", MatchOTP);

router.post("/api/Reset_Password", Reset_Password);

// ----------------------------------------------------------------------------- Adventure @api

router.post("/api/adventure", createAdventure);

router.get("/api/adventure", getAllAdventures);

router.get("/api/adventure/:id", getAdventureById);

router.post("/api/adventure/:id", updateAdventure);

router.post("/api/adventure/delete/:id", deleteAdventure);

router.get(
  "/api/adventure/filter/fetchCompletedAdventure",
  fetchCompletedAdventure
);

router.get(
  "/api/adventure/filter/fetchInProgressAdventure",
  fetchInProgressAdventure
);

router.get("/api/adventure/filter/fetchNewAdventure", fetchNewAdventure);

// ----------------------------------------------------------------------------- Fantasy @api

router.post("/api/fantasy", createFantasy);

router.get("/api/fantasy", getAllFantasy);

router.get("/api/fantasy/:id", getFantasyById);

router.post("/api/fantasy/:id", updateFantasy);

router.post("/api/fantasy/delete/:id", deleteFantasy);

router.get("/api/fantasy/filter/fetchCompletedFantasy", fetchCompletedFantasy);

router.get(
  "/api/fantasy/filter/fetchInProgressFantasy",
  fetchInProgressFantasy
);

router.get("/api/fantasy/filter/fetchNewFantasy", fetchNewFantasy);

// ----------------------------------------------------------------------------- History fiction @api

router.post("/api/historyfiction", createHistoryfiction);

router.get("/api/historyfiction", getAllHistoryfiction);

router.get("/api/historyfiction/:id", getHistoryfictionById);

router.post("/api/historyfiction/:id", updateHistoryfiction);

router.post("/api/historyfiction/delete/:id", deleteHistoryfiction);

router.get(
  "/api/historyfiction/filter/fetchCompletedHistoryfiction",
  fetchCompletedHistoryfiction
);

router.get(
  "/api/historyfiction/filter/fetchInProgressHistoryfiction",
  fetchInProgressHistoryfiction
);

router.get(
  "/api/historyfiction/filter/fetchNewHistoryfiction",
  fetchNewHistoryfiction
);

// ----------------------------------------------------------------------------- Sciencefiction @api

router.post("/api/sciencefiction", createSciencefiction);

router.get("/api/sciencefiction", getAllSciencefiction);

router.get("/api/sciencefiction/:id", getSciencefictionById);

router.post("/api/sciencefiction/:id", updateSciencefiction);

router.post("/api/sciencefiction/delete/:id", deleteSciencefiction);

router.get(
  "/api/sciencefiction/filter/fetchCompletedSciencefiction",
  fetchCompletedSciencefiction
);

router.get(
  "/api/sciencefiction/filter/fetchInProgressSciencefiction",
  fetchInProgressSciencefiction
);

router.get(
  "/api/sciencefiction/filter/fetchNewSciencefiction",
  fetchNewSciencefiction
);

// ----------------------------------------------------------------------------- sportfiction @api

router.post("/api/sportfiction", createSportfiction);

router.get("/api/sportfiction", getAllSportfiction);

router.get("/api/sportfiction/:id", getSportfictionById);

router.post("/api/sportfiction/:id", updateSportfiction);

router.post("/api/sportfiction/delete/:id", deleteSportfiction);

router.get(
  "/api/sportfiction/filter/fetchCompletedSportfiction",
  fetchCompletedSportfiction
);

router.get(
  "/api/sportfiction/filter/fetchInProgressSportfiction",
  fetchInProgressSportfiction
);

router.get(
  "/api/sportfiction/filter/fetchNewSportfiction",
  fetchNewSportfiction
);

// ----------------------------------------------------------------------------- Mystery @api

router.post("/api/mystery", createMystery);

router.get("/api/mystery", getAllMystery);

router.get("/api/mystery/:id", getMysteryById);

router.post("/api/mystery/:id", updateMystery);

router.post("/api/mystery/delete/:id", deleteMystery);

router.get("/api/mystery/filter/fetchCompletedMystery", fetchCompletedMystery);

router.get(
  "/api/mystery/filter/fetchInProgressMystery",
  fetchInProgressMystery
);

router.get("/api/mystery/filter/fetchNewMystery", fetchNewMystery);

router.post("/api/Fetch_Daily_Quiz_Data", Fetch_Daily_Quiz_Data);

router.get("/api/FetchAllUsers", FetchAllUsers);

router.post('/api/Fetch_WeeklyPerformace_Data' , Fetch_WeeklyPerformace_Data)

router.post("/api/Get_Weekly_Performance_of_Student/:id",Get_Weekly_Performance_of_Student);

router.get("/api/Get_Weekly_Performance_of_Student_All/:id",Get_Weekly_Performance_of_Student_All)


//-----------------------questions Routs--------------------

router.post("/api/question", createQuestion);

router.get("/api/question", getAllQuestions);

router.get("/api/question/getQuestionByStudentIdAndQuestionId", getQuestionByStudentIdAndQuestionId);

router.put("/api/question/updateQuestionByStudentIdAndQuestionId", updateQuestionByStudentIdAndQuestionId);

router.get("/api/questions/:id", deleteQuestion);

//---------------------------------- Progress ----------------

router.post("/api/progress/CreateProgress",CreateProgress)

router.get("/api/Get_Daily_Quiz_Questions/:Student_id" , Get_Daily_Quiz_Questions)

router.get('/api/Fetch_LeaderBoardData_For_Current_Weeked', Fetch_LeaderBoardData_For_Current_Weeked)

router.post('/api/Update_Questions',Update_Questions)



module.exports = router;
