import { getUserId } from "../general/common.function.js";
import contentModel from "../models/contentModel.js";

export async function createContent(req, dataresponse) {
  let Results = [];
  await dataresponse?.map((data, i) => {
    Results.push({ id: i + 1, result: data.text });
  });

  console.log(`single_content`, req.body.single_content);

  let userId = await getUserId(req);
  console.log("userId", userId);

  let contentModelData = new contentModel();
  contentModelData.user_id = userId;
  contentModelData.category = req.body.category;
  contentModelData.question_one = req.body.inputOne;
  contentModelData.question_two = req.body.inputTwo;
  contentModelData.tone = req.body.tone;
  contentModelData.results = Results;
  contentModelData.q_repeatation = null;
  contentModelData.single_content = req.body.single_content;
  contentModelData.multiple_content = req.body.multiple_content;
  contentModelData.created_date = new Date();
  let content = await contentModelData;

  //console.log("content_28",content);
  contentModelData.save();
}

export async function contentHistory(req) {
  let userId = await getUserId(req);
  console.log("userId", userId);

  let date = new Date();
  let today_dte = new Date().toISOString().slice(0, 10);
  let tomorrow_dte = new Date(date.getTime() + 24 * 60 * 60 * 1000);
  let yesterday_dte = new Date(date.getTime() - 24 * 60 * 60 * 1000);
  let thisweek_dte = new Date(new Date() - 7 * 60 * 60 * 24 * 1000);
  let lastweek_dte = new Date(new Date() - 14 * 60 * 60 * 24 * 1000);

  let toDayData = await contentModel
    .find({
      user_id: userId,
      created_date: { $gt: today_dte },
      single_content : { $exists: true, $ne: null }
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });

  let yesterdayData = await contentModel
    .find({
      user_id: userId,
      created_date: { $gt: yesterday_dte, $lt: today_dte },
      single_content : { $exists: true, $ne: null }
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });

  let thisweekData = await contentModel
    .find({
      user_id: userId,
      created_date: { $gte: thisweek_dte },
      single_content : { $exists: true, $ne: null }
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });

  let lastweekData = await contentModel
    .find({
      user_id: userId,
      created_date: { $lte: thisweek_dte, $gte: lastweek_dte },
      single_content : { $exists: true, $ne: null }
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });

  let contentHistoryData = [
    { toDayData: toDayData },
    { yesterdayData: yesterdayData },
    { thisweekData: thisweekData },
    { lastweekData: lastweekData },
  ];

  return contentHistoryData;
}
