import React, { useState } from 'react'
import { contactPageStyles as styles } from '../assets/dummystyles'
import { AlertCircle, CheckCircle, Mail, MessageSquare, Phone, Send, User } from 'lucide-react'

const contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    const [toast, setToast] = useState({ visible: false, message: "", type: "info" })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return
        
        const phoneNumber = '84123456789'
        const textLines = [
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            formData.phone && `Phone: ${formData.phone}`,
            formData.subject && `Subject: ${formData.subject}`,
            `Message: ${formData.message}`
        ].filter(Boolean)
        const text = textLines.join("\n")
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
        setErrors({})
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        
        if(errors[name]) setErrors(prev => ({...prev, [name]: ""}))
    }
  return (
      <div className={styles.containerStyle}>
          {toast.visible && (
              <div className={styles.toastStyle(toast.type)}>
                  {toast.type === 'success' ? (
                      <CheckCircle className='h-5 w-5 mr-2' />
                  ) : (
                          <AlertCircle className='h-5 w-5 mr-2' />
                  )}
                  <span>{ toast.message}</span>
              </div>
          )}
          <div className="container mx-auto px-4 md:px-6">
              <div className={styles.headerStyle}>
                  <h1 className='text-4xl font-bold text-gray-800 mb-4'>Liên hệ</h1>
                  <p className='text-gray-600 max-w-2xl mx-auto'>
                      Góp ý hay liên hệ cộng tác?
                  </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className={styles.contactInfoCardStyle}>
                      <h2 className={styles.sectionHeadingStyle}>Thông tin liên hệ</h2>
                      <div className="space-y-6">
                          <div className={styles.contactItemStyle}>
                              <Mail className='h-6 w-6 text-[#43C6AC]' />
                              <div>
                                  <h3 className='font-medium text-gray-800 mb-1'>Email</h3>
                                  <p className='text-gray-600'>yeutruyen2025@gmail.com</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={styles.contactFormCardStyle}>
                      <h2 className={styles.sectionHeadingStyle}>Send</h2>
                      <form onSubmit={handleSubmit} className='space-y-6'>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {['name', 'email'].map((field) => (
                                  <div className="space-y-2" key={field}>
                                      <label className={styles.labelStyle}>
                                          {field.charAt(0).toUpperCase() + field.slice(1)}
                                          <span className='text-red-500'>*</span>
                                      </label>
                                      <div className={styles.inputWrapperStyle}>
                                          {field === 'name' ? (
                                              <User className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                                          ) : (
                                                  <Mail className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                                          )}
                                          <input type={field === 'email' ? 'email' : 'text'} name={field} value={formData[field]} onChange={handleChange} className={styles.inputStyle} />
                                          {errors[field] && <p className={styles.errorStyle}>{errors[field] }</p>}
                                      </div>
                                  </div>
                              ))}
                              <div className="space-y-2">
                                  <label className={styles.labelStyle}>
                                      Phone <span className='text-gray-500'>(optional)</span>
                                  </label>
                                  <div className={styles.inputWrapperStyle}>
                                      <Phone className='absolute left-3 top-3 text-gray-400 h-5 w-5' />
                                      <input type="tel" name='phone' value={formData.phone} onChange={handleChange} className={styles.inputStyle} />
                                  </div>
                              </div>
                                <div className="space-y-2">
                                  <label className={styles.labelStyle}>
                                      Subject <span className='text-gray-500'>(optional)</span>
                                  </label>
                                  <div className={styles.inputWrapperStyle}>
                                      <input type="subject" value={formData.subject} onChange={handleChange} className={styles.inputStyle} />
                                  </div>
                              </div>
                                <div className="space-y-3">
                                  <label className={styles.labelStyle}>
                                      Message <span className='text-gray-500'>(optional)</span>
                                  </label>
                                  <div className={styles.inputWrapperStyle}>
                                      <MessageSquare className='absolute left-3 top-3 text-gray-400 h-5 w-5' />
                                      <textarea value={formData.message} rows='4' onChange={handleChange} className={styles.textareaStyle} />
                                  </div>
                              </div>
                          </div>
                              <button type='submit' disabled={isSubmitting} className={styles.submitButtonStyle}>
                                  <div className={styles.sendIconWrapperStyle}>
                                      <Send className='w-5 h-5 mr-2' />
                                      Send
                                  </div>
                              </button>
                      </form>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default contact