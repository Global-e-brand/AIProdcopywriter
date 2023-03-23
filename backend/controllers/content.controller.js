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
  // console.log("req.query.page", req.query);

  let date = new Date();
  let today_dte = new Date().toISOString().slice(0, 10);
  let tomorrow_dte = new Date(date.getTime() + 24 * 60 * 60 * 1000);
  let yesterday_dte = new Date(date.getTime() - 24 * 60 * 60 * 1000);
  let thisweek_dte = new Date(new Date() - 7 * 60 * 60 * 24 * 1000);
  let lastweek_dte = new Date(new Date() - 14 * 60 * 60 * 24 * 1000);

  let perPage = 5;
  let todaypage = req.query.todaypage || 1;
  let yesterdaypage = req.query.yesterdaypage || 1;
  let thisweekpage = req.query.thisweekpage || 1;
  let lastweekpage = req.query.lastweekpage || 1;

  let toDayData, yesterdayData, thisweekData, lastweekData;

  // today
  try {
    const today_query = {
      user_id: userId,
      created_date: { $gt: today_dte },
      single_content: { $exists: true, $ne: null },
    };
    const today_count = await contentModel.find(today_query).count();

    const today_pageCount = (Math.round(today_count / 5) * 5) / perPage;

    toDayData = await contentModel
      .find(today_query)
      .limit(perPage)
      .skip((todaypage - 1) * perPage)
      .then((data) => {
        return { items: data, pageCount: today_pageCount };
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log("err_todaydata");
  }

  // yesterday
  try {
    const yesterdayData_query = {
      user_id: userId,
      created_date: { $gt: yesterday_dte, $lt: today_dte },
      single_content: { $exists: true, $ne: null },
    };
    const yesterdayData_count = await contentModel
      .find(yesterdayData_query)
      .count();

    const yesterdayData_pageCount =
      (Math.round(yesterdayData_count / 5) * 5) / perPage;

    yesterdayData = await contentModel
      .find(yesterdayData_query)
      .limit(perPage)
      .skip((yesterdaypage - 1) * perPage)
      .then((data) => {
        return { items: data, pageCount: yesterdayData_pageCount };
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log("err_yesterdaydata");
  }

  // thisweek
  try {
    const thisweekData_query = {
      user_id: userId,
      created_date: { $gte: thisweek_dte },
      single_content: { $exists: true, $ne: null },
    };

    const thisweekData_count = await contentModel
      .find(thisweekData_query)
      .count();
    const thisweekData_pageCount =
      (Math.round(thisweekData_count / 5) * 5) / perPage;

    thisweekData = await contentModel
      .find(thisweekData_query)
      .limit(perPage)
      .skip((thisweekpage - 1) * perPage)
      .then((data) => {
        return { items: data, pageCount: thisweekData_pageCount };
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log("err_thisweekdata");
  }

  // lastweek
  try {
    const lastweekData_query = {
      user_id: userId,
      created_date: { $lte: thisweek_dte, $gte: lastweek_dte },
      single_content: { $exists: true, $ne: null },
    };
    const lastweekData_count = await contentModel
      .find(lastweekData_query)
      .count();
    const lastweekData_pageCount =
      (Math.round(lastweekData_count / perPage) * perPage) / perPage;

    lastweekData = await contentModel
      .find(lastweekData_query)
      .limit(perPage)
      .skip((lastweekpage - 1) * perPage)
      .then((data) => {
        return { items: data, pageCount: lastweekData_pageCount };
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (e) {
    console.log("err_lastweekdata");
  }

  let contentHistoryData = [
    { toDayData: toDayData },
    { yesterdayData: yesterdayData },
    { thisweekData: thisweekData },
    { lastweekData: lastweekData },
  ];

  return contentHistoryData;
}
