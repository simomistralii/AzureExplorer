export const config = {
    appId: `c3dd77ea-73f0-4e52-b5a2-8cf76a636518`,
    redirectUri : `/`,
    scopes: [`User.Read`, 'openid'],
    authority: `https://login.microsoftonline.com/mjouneyoussefgmail.onmicrosoft.com`,
    tenantID : `mjouneyoussefgmail.onmicrosoft.com`,
    powerBI: {
        applicationId : `da117762-5d6b-4204-8b68-0b10d2743505`,
        applicationSecret : `5Ag8Q~umFYgARK3x1D5gGGLUt3E2r3x6_s3Nsbld`,
        workspaceId : `5ff25021-e6c8-47f6-afbf-8e1eb9eec9d7`,
        reportId : `ea122c56-5c9f-4930-b3fa-73156297594a`,
    },
    cache: {
        cacheLocation: `localStorage`,
    },
    system: {
        navigateFrameWait: 0,
    },
};


//P028Q~abIxak5StGhIX1hAbwgz~-rXK4PiQl9dwY