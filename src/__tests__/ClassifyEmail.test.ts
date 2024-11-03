jest.mock("axios");
import axios from "axios";
import { ClassifyEmail } from "~/server/queries/spam_classifier";

describe("ClassifyEmail", () => {
  it("should classify spam email correctly", async () => {
    const spamEmail = `Subject: Congratulations! You've won a $1000 Gift Card!

    Dear Valued Customer,

    We are thrilled to inform you that you have been selected as the winner of our exclusive $1000 gift card giveaway! This is an amazing opportunity to shop at your favorite stores for FREE!

    To claim your prize, simply click the link below and fill out the required information. Don’t miss out on this incredible chance!

    Claim your $1000 Gift Card Now!

    Hurry! This offer expires in 24 hours!

    Best regards,
    The Gift Card Team`;

    const mockResponse = { isSpam: true };
    (axios.post as jest.Mock).mockResolvedValueOnce({ data: mockResponse });

    const result = await ClassifyEmail(spamEmail);

    expect(result).toEqual(mockResponse);
    expect(axios.post).toHaveBeenCalledWith(
      "https://territorial-ariel-alan-organization-edc3cd2e.koyeb.app/classify",
      { email: spamEmail },
    );
  });

  it("should throw an error when API call fails", async () => {
    const spamEmail = "Test email";

    (axios.post as jest.Mock).mockRejectedValueOnce(new Error("Network error"));

    await expect(ClassifyEmail(spamEmail)).rejects.toThrow(
      "Error al ejecutar o procesar el script de Python",
    );
  });
});
