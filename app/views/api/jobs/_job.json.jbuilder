# json.extract! job, :title, :description, :rate, :status, :user_id, :id, :location

json.title job.title
json.description job.description
json.rate job.rate
json.status job.status
json.user_id job.user_id
json.id job.id
json.location job.location

json.business_name job.user.employer_detail.business_name
json.background_info job.user.employer_detail.background_info
