import sgMail from '@sendgrid/mail';

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, event, name, count } = req.body;

  const content = {
    to: 'britniandsamuel@gmail.com',
    from: email,
    subject: `${event} RSVP - Website`,
    text: `${event} - ${name} (${count})`,
    html: `<h5>${event}</h5><p>Name: ${name}</p><p>Email: ${email}</p><p>Count: ${count}</p>`
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent successfully.');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
