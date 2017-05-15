## Component Hierarchy

**AuthFormContainer**
 - AuthForm
 - Errors

**HomeContainer**
 - Home
 - Search

**UserProfileContainer**
 - UserProfileHeader
 - UserProfileMain

**ReviewsContainer**
 - Reviews

**UserSettingsContainer**
 - UserSettingsForm
   + AvatarSelector
   + RoleSelector
   + Errors

**JobListContainer**
 - JobListIndex
 - JobListItem

**BusinessProfileContainer**
 - BusinessProfileHeader
 - BusinessProfileMain

**BusinessSettingsContainer**
 - BusinessSettingsForm
   + AvatarSelector
   + Errors

**JobPostFormContainer**
 - JobPostForm
   + RoleSelector

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/users/:id" | "UserProfileContainer" |
| "/users/:id/settings" | "UserSettingsContainer" |
| "/businesses/:id" | "BusinessProfileContainer" |
| "/businesses/:id/settings" | "BusinessSettingsContainer" |
