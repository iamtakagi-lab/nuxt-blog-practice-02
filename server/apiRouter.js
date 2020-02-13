const express = require('express');
const router = express.Router();
const { google } = require('googleapis')
const mail = require('./mail')

router.post('/contact',  (req, res) => {
    const body = req.body;

    console.log(body);

    mail.send(body.name, body.email, body.message);
})

router.get('/ga-tops', async (req, res) => {
    const client = await google.auth.getClient({
        keyFile: './keys.json',
        scopes: 'https://www.googleapis.com/auth/analytics.readonly'
    })

    const analyticsreporting = google.analyticsreporting({
        version: 'v4',
        auth: client
    })

    const googleRes = await analyticsreporting.reports.batchGet({
        requestBody: {
            reportRequests: [
                {
                    viewId: '211210177',  // メモしたGoogle Analyticsの ビューIDを入力
                    dateRanges: [ // 過去30日を集計対象とする
                        {
                            startDate: '30daysAgo',
                            endDate: '1daysAgo'
                        }
                    ],
                    dimensions: [ // ページパスをディメンションにする
                        {
                            name: 'ga:pagePath'
                        }
                    ],
                    metrics: [ // 利用する指標
                        {
                            expression: 'ga:pageviews'  // ページビューを指標として利用
                        }
                    ],
                    orderBys: { // ソート順
                        fieldName: 'ga:pageviews', // ページビューでソート
                        sortOrder: 'DESCENDING'  // 降順でソートする設定
                    },
                    pageSize: 5 // レスポンス件数を5件に
                }
            ]
        }
    })
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.json(googleRes.data);
    res.end();
});

module.exports = router;