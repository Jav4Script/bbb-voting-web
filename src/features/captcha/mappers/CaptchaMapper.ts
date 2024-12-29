import { Captcha } from '../entities/Captcha'
import { CaptchaDTO } from '../dtos/CaptchaDTO'

export class CaptchaMapper {
  static toDTO(captcha: Captcha): CaptchaDTO {
    return {
      captcha_id: captcha.captchaId,
      captcha_image: captcha.captchaImage,
    }
  }

  static toEntity(captchaDTO: CaptchaDTO): Captcha {
    return {
      captchaId: captchaDTO.captcha_id,
      captchaImage: captchaDTO.captcha_image,
    }
  }
}
