import { Resend } from 'resend';

export const sendContactEmail = async (req, res) => {
  try {
    const { user_name, user_email, message } = req.body;

    // Validate required fields
    if (!user_name || !user_email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: name, email, and message are required.'
      });
    }

    // Get API key and recipient email from environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.EMAIL_TO || 'amanara13579@gmail.com';

    // Validate Resend API key is configured
    if (!resendApiKey) {
      console.error('CONTACT ROUTE ERROR: RESEND_API_KEY not configured');
      return res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    }

    // Initialize Resend client
    const resend = new Resend(resendApiKey);

    // Generate HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Message</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${escapeHtml(user_name)}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${escapeHtml(user_email)}</p>
          <p style="margin: 10px 0;"><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; word-wrap: break-word;">
            ${escapeHtml(message)}
          </p>
        </div>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
        <p style="color: #666; font-size: 12px;">
          Received at: ${new Date().toLocaleString()}
        </p>
      </div>
    `;

    // Send email using Resend API
    const emailResponse = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: emailTo,
      replyTo: user_email,
      subject: `New Portfolio Contact Message from ${escapeHtml(user_name)}`,
      html: htmlContent
    });

    // Check if email was sent successfully
    if (emailResponse.error) {
      console.error('CONTACT ROUTE ERROR:', emailResponse.error);
      return res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    }

    // Success response
    res.status(200).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
      messageId: emailResponse.data?.id || undefined
    });

  } catch (error) {
    console.error('CONTACT ROUTE ERROR:', error);

    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    });
  }
};

// Helper function to escape HTML and prevent injection
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
