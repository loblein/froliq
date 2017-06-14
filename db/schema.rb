# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170614201621) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "biographies", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.text     "personal_info"
    t.string   "home_town"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["user_id"], name: "index_biographies_on_user_id", using: :btree
  end

  create_table "category_selectors", force: :cascade do |t|
    t.integer  "job_id",                         null: false
    t.boolean  "dishwasher",     default: false
    t.boolean  "waiter",         default: false
    t.boolean  "cook",           default: false
    t.boolean  "laborer",        default: false
    t.boolean  "assistant",      default: false
    t.boolean  "caretaker",      default: false
    t.boolean  "farmer",         default: false
    t.boolean  "landscaper",     default: false
    t.boolean  "transportation", default: false
    t.boolean  "carpenter",      default: false
    t.boolean  "creative",       default: false
    t.boolean  "miscellaneous",  default: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  create_table "employer_details", force: :cascade do |t|
    t.integer  "user_id",         null: false
    t.string   "location"
    t.text     "background_info"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "business_name"
    t.index ["user_id"], name: "index_employer_details_on_user_id", using: :btree
  end

  create_table "employer_settings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_employer_settings_on_user_id", using: :btree
  end

  create_table "jobs", force: :cascade do |t|
    t.integer  "user_id",                      null: false
    t.string   "title",                        null: false
    t.text     "description",                  null: false
    t.string   "status",      default: "open", null: false
    t.float    "rate",        default: 10.0
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.index ["user_id"], name: "index_jobs_on_user_id", using: :btree
  end

  create_table "role_selectors", force: :cascade do |t|
    t.integer  "user_id",                        null: false
    t.boolean  "dishwasher",     default: false
    t.boolean  "waiter",         default: false
    t.boolean  "cook",           default: false
    t.boolean  "laborer",        default: false
    t.boolean  "assistant",      default: false
    t.boolean  "caretaker",      default: false
    t.boolean  "farmer",         default: false
    t.boolean  "landscaper",     default: false
    t.boolean  "transportation", default: false
    t.boolean  "carpenter",      default: false
    t.boolean  "creative",       default: false
    t.boolean  "miscellaneous",  default: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.integer  "job_id"
    t.index ["user_id"], name: "index_role_selectors_on_user_id", using: :btree
  end

  create_table "traveler_settings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_traveler_settings_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.boolean  "employer"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
