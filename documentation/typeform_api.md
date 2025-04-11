# Typeform API Documentation

## Overview

Typeform's developer platform provides several APIs that allow you to integrate Typeform with your applications. The platform enables you to create forms, retrieve submissions, deliver submissions to your application, and embed forms into your website or app[5].

## Available APIs

Typeform offers four main API services:

1. **Create API** - For creating, updating, and managing typeforms, themes, and images
2. **Responses API** - For retrieving submissions programmatically 
3. **Webhooks** - For automatically delivering form submissions to your URL
4. **Embed API** - For integrating typeforms into your website or app[5]

## Authentication

### Personal Access Token

To use Typeform's APIs, you need to authenticate using a personal access token:

1. Log in to your Typeform account
2. Navigate to your account settings
3. Find the "Personal tokens" section
4. Generate a new token with appropriate scopes

For responses API, you'll need the `responses:read` scope[4].

### OAuth 2.0 Authentication

For applications that access Typeform on behalf of users:

1. **Register a Developer App**:
   - Log into Typeform account
   - Navigate to Developer Apps section
   - Register a new app with name, website, and redirect URI[4]

2. **Configure OAuth Flow**:
   - Direct users to authorization URL:
     ```
     https://api.typeform.com/oauth/authorize?client_id={your_client_id}&redirect_uri={your_redirect_uri}&scope=responses:read
     ```
   - Exchange authorization code for access token:
     ```
     POST https://api.typeform.com/oauth/token
     ```
     With parameters:
     - grant_type=authorization_code
     - code={authorization_code}
     - client_id={your_client_id}
     - client_secret={your_client_secret}
     - redirect_uri={your_redirect_uri}[4]

## Responses API (For Reading Form Results)

The Responses API lets you access form submissions on-demand in JSON format without setting up webhooks or third-party integrations[3][7].

### Base URL

```
https://api.typeform.com/forms/{form_id}/responses
```

### Headers

```
Authorization: Bearer {your_access_token}
Content-Type: application/json
```

### Query Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| page_size | Maximum number of responses (default: 25, max: 1000)[9] | `page_size=100` |
| since | Limit to responses after specified date/time[7][9] | `since=2023-04-10T00:00:00` |
| until | Limit to responses before specified date/time[7][9] | `until=2023-04-11T00:00:00` |
| before | Retrieve responses before this token (pagination)[7] | `before={token_value}` |
| after | Retrieve responses after this token (pagination)[7] | `after={token_value}` |
| completed | Filter by completion status (deprecated)[9] | `completed=true` |
| response_type | Type of response: "completed", "partial", or "landed"[9] | `response_type=completed` |
| sort | Response ordering (`{fieldID},{asc|desc}`)[9] | `sort=submitted_at,desc` |
| query | Search string across responses[9] | `query=search_term` |

### Basic Request Example

```bash
curl --request GET \
  --url 'https://api.typeform.com/forms/{form_id}/responses' \
  --header 'authorization: Bearer {your_access_token}'
```

### Response Format

The JSON response structure includes:

```json
{
  "total_items": 4,
  "page_count": 1,
  "items": [
    // Response objects
  ]
}
```

Each response object contains:
- Metadata (submission time, completion status)
- Answers to form questions
- Hidden fields
- Calculated values[8]

### Filtering Responses by Date

To get responses from a specific date range:

```bash
curl --request GET \
  --url 'https://api.typeform.com/forms/{form_id}/responses?since=2023-04-10T00:00:00&until=2023-04-11T00:00:00' \
  --header 'authorization: Bearer {your_access_token}'
```

### Pagination

For typeforms with more than 1000 responses, use pagination:

1. Make initial request with `page_size` parameter
2. For subsequent requests, use the `before` parameter with the token value from the last response
3. Continue until all responses are retrieved[7]

```bash
curl --request GET \
  --url 'https://api.typeform.com/forms/{form_id}/responses?page_size=25&before={token_value}' \
  --header 'authorization: Bearer {your_access_token}'
```

## PHP Integration Examples

### Basic PHP Code to Retrieve Responses

```php

```

### Filtering Responses by Date

```php

```

## Webhooks for Real-time Data

As an alternative to polling the Responses API, you can use Webhooks to automatically receive submissions:

1. Configure a webhook to send data to your URL when forms are submitted
2. Receive form data in real-time without making API requests

```json
{
  "form_id": "form_id",
  "tag": "webhook_tag",
  "url": "https://your-app.com/webhook",
  "enabled": true
}
```

Webhooks are especially useful for capturing very recent submissions, which may not be immediately available through the Responses API[9].

## Error Handling

Common error codes:
- 400: Bad Request (check parameters)
- 401: Unauthorized (invalid token)
- 405: Method Not Allowed (wrong HTTP method)
- 500: Internal Server Error (server-side issue)[4]

## Best Practices

1. **Secure Storage of Credentials**: Never hardcode tokens in source code
2. **Implement Rate Limiting**: Be mindful of API rate limits
3. **Error Handling**: Implement robust error handling
4. **Pagination**: For forms with many responses, implement proper pagination[4]

## Integration with Other Tools

### Stack AI Integration

Stack AI provides a Typeform node that allows you to receive form submissions as they get submitted:

1. Authenticate with your Typeform account
2. Select specific forms to connect to your workflow
3. Enable webhooks to receive results as they get submitted
4. Use the results in your Stack AI workflow[1]

Citations:
[1] https://www.stack-ai.com/docs/builder-guide/triggers/typeform
[2] https://www.typeform.com/developers/create/reference/create-form/
[3] https://www.typeform.com/developers/responses/
[4] https://endgrate.com/blog/using-the-typeform-api-to-get-responses-(with-php-examples)
[5] https://www.typeform.com/developers/
[6] https://www.typeform.com/developers/create/
[7] https://www.typeform.com/developers/responses/walkthroughs/
[8] https://www.typeform.com/developers/responses/JSON-response-explanation/
[9] https://www.typeform.com/developers/responses/reference/retrieve-responses/
[10] https://www.reddit.com/r/msp/comments/1387m86/typeform_drafting/
[11] https://www.reddit.com/r/typeform/comments/qzoev9/api_feed_to_answer_questions/
[12] https://www.reddit.com/r/AIToolTracker/comments/14r4e6o/hey_guys_were_working_on_an_ai_code_documentation/
[13] https://www.typeform.com/developers/get-started/
[14] https://community.typeform.com/build-your-typeform-7/typeform-for-process-documentation-8392
[15] https://www.typeform.com/connect-category/documents
[16] https://help.typeform.com/hc/en-us
[17] https://help.typeform.com/hc/es/articles/360053660271-Mi-primer-typeform
[18] https://www.typeform.com/es/connect-category/documents
[19] https://www.typeform.com
[20] https://help.typeform.com/hc/en-us/articles/360038717092-What-is-Typeform
[21] https://www.reddit.com/r/software/comments/q79ea2/time_tracker_connected_to_typeform/
[22] https://www.reddit.com/r/zapier/comments/zn0bn5/would_typeform_openai_typeform_be_possible_with/
[23] https://www.reddit.com/r/Integromat/comments/jvzbm4/please_help_how_can_we_connect_a_multiplechoice/
[24] https://www.postman.com/typeform/typeform-public-workspace/documentation/sau1ujn/typeform-api-reference
[25] https://apitracker.io/a/typeform
[26] https://www.postman.com/typeform/typeform-public-workspace/overview
[27] https://www.typeform.com/developers/webhooks/
[28] https://www.typeform.com/developers/create/walkthroughs/
[29] https://www.typeform.com/developers/webhooks/walkthroughs/
[30] https://www.reddit.com/r/nocode/comments/18bp4qx/looking_for_a_form_builder_similar_to_typeform/
[31] https://www.reddit.com/r/HelpMeFind/comments/zpbqar/help_me_find_an_app_or_integration_of_apps_that/
[32] https://www.reddit.com/r/perplexity_ai/comments/1f5grep/how_long_did_you_wait_for_perplexity_api_beta/
[33] https://www.reddit.com/r/nocode/comments/1crofan/need_help_automating_aigenerated_questionnaires/
[34] https://www.reddit.com/r/LocalLLaMA/comments/14jk0m3/what_is_the_best_way_to_create_a_knowledgebase/
[35] https://www.reddit.com/r/webdev/comments/13sy32x/do_i_dont_need_a_custom_solution_for_this/
[36] https://www.reddit.com/r/degoogle/comments/10coeht/any_alternatives_to_google_forms/
[37] https://www.reddit.com/r/nocode/comments/10l3gcr/what_is_your_favourite_nocode_form_builder/
[38] https://www.reddit.com/r/SaaS/comments/1gpn8gt/how_we_bootstrapped_our_form_builder_to_150k_mrr/
[39] https://www.reddit.com/r/hubspot/comments/1bv6pkx/is_there_a_way_to_capture_form_data_on_an/
[40] https://www.postman.com/typeform/typeform-public-workspace/request/y1lu2n2/retrieve-responses
[41] https://github.com/Typeform/results-example
[42] https://blog.dreamfactory.com/typeform-apis-dreamfactory
[43] https://www.reddit.com/r/zapier/comments/nefkig/help_is_there_a_way_to_generate_pretty_pdf/
[44] https://www.reddit.com/r/web_design/comments/170usjj/i_want_to_make_a_website_like_this_whats_the_best/
[45] https://www.reddit.com/r/webdev/comments/128cw0b/typeform_clone/
[46] https://www.reddit.com/r/selfhosted/comments/1bj83ih/service_typeform_alternative_phpform/
[47] https://www.reddit.com/r/typeform/
[48] https://www.reddit.com/r/nocode/comments/zsm01r/tally_vs_typeform_feedbacks/
[49] https://help.typeform.com/hc/en-us/articles/360053660271-My-first-form
[50] https://help.typeform.com/hc/en-us/articles/360051789692-Question-types
[51] https://www.reddit.com/r/nocode/comments/1022h2p/is_there_a_form_builder_such_as_typeform_that/
[52] https://www.reddit.com/r/react/comments/133xt6r/i_built_an_opensource_alternative_to_typeform/
[53] https://www.reddit.com/r/selfhosted/comments/1j4elyx/looking_for_feedback_on_my_project_open_source/
[54] https://www.reddit.com/r/nocode/comments/1i0c3hp/typeform_alternative_that_allows_upload_of/
[55] https://docs.gitguardian.com/secrets-detection/secrets-detection-engine/detectors/specifics/typeform_api_token
[56] https://www.typeform.com/developers/get-started/hands-on/
[57] https://www.typeform.com/developers/get-started/applications/
[58] https://www.reddit.com/r/GoogleAppsScript/comments/kxruxd/google_script_changing_date_format_from_typeform/
[59] https://www.reddit.com/r/Notion/comments/z29mr9/sending_data_to_notion_via_a_form/
[60] https://www.reddit.com/r/aws/comments/nw3y7n/how_would_ses_work_with_a_contact_us_type_form/
[61] https://www.reddit.com/r/laravel/comments/rez2oe/anyone_know_any_form_data_collecting_platform/
[62] https://www.reddit.com/r/softwaretools/comments/1bvfsf5/is_typeform_legit_for_corporations/
[63] https://www.reddit.com/r/nocode/comments/1dgl2zb/which_platform_for_complicated_forms/

