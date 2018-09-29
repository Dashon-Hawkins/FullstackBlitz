const re= /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export default (emails) =>
{
const invalidEmails=
    emails.split(',')
    .map(email=>
    email.trim())

.filter(email => re.test(email) === false);

if(invalidEmails.length) {
    return `these emails are invalid: ${invalidEmails}`;
}

return;

};