﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Prilozhenie_1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудники.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудники CustomAttributes)

    // *** End programmer edit section *** (Сотрудники CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникиE", new string[] {
            "КодСотрудника as \'Код сотрудника\'",
            "ФИО as \'ФИО\'",
            "Должность as \'Должность\'",
            "Контакты as \'Контакты\'",
            "ДатаРождения as \'Дата рождения\'"})]
    [View("СотрудникиL", new string[] {
            "КодСотрудника as \'Код сотрудника\'",
            "ФИО as \'ФИО\'",
            "Должность as \'Должность\'",
            "Контакты as \'Контакты\'",
            "ДатаРождения as \'Дата рождения\'"})]
    public class Сотрудники : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодСотрудника;
        
        private string fФИО;
        
        private string fДолжность;
        
        private string fКонтакты;
        
        private System.DateTime fДатаРождения;
        
        // *** Start programmer edit section *** (Сотрудники CustomMembers)

        // *** End programmer edit section *** (Сотрудники CustomMembers)

        
        /// <summary>
        /// ДатаРождения.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.ДатаРождения CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.ДатаРождения CustomAttributes)
        public virtual System.DateTime ДатаРождения
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.ДатаРождения Get start)

                // *** End programmer edit section *** (Сотрудники.ДатаРождения Get start)
                System.DateTime result = this.fДатаРождения;
                // *** Start programmer edit section *** (Сотрудники.ДатаРождения Get end)

                // *** End programmer edit section *** (Сотрудники.ДатаРождения Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.ДатаРождения Set start)

                // *** End programmer edit section *** (Сотрудники.ДатаРождения Set start)
                this.fДатаРождения = value;
                // *** Start programmer edit section *** (Сотрудники.ДатаРождения Set end)

                // *** End programmer edit section *** (Сотрудники.ДатаРождения Set end)
            }
        }
        
        /// <summary>
        /// Должность.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Должность CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Должность CustomAttributes)
        [StrLen(255)]
        public virtual string Должность
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Должность Get start)

                // *** End programmer edit section *** (Сотрудники.Должность Get start)
                string result = this.fДолжность;
                // *** Start programmer edit section *** (Сотрудники.Должность Get end)

                // *** End programmer edit section *** (Сотрудники.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Должность Set start)

                // *** End programmer edit section *** (Сотрудники.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (Сотрудники.Должность Set end)

                // *** End programmer edit section *** (Сотрудники.Должность Set end)
            }
        }
        
        /// <summary>
        /// КодСотрудника.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.КодСотрудника CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.КодСотрудника CustomAttributes)
        public virtual int КодСотрудника
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.КодСотрудника Get start)

                // *** End programmer edit section *** (Сотрудники.КодСотрудника Get start)
                int result = this.fКодСотрудника;
                // *** Start programmer edit section *** (Сотрудники.КодСотрудника Get end)

                // *** End programmer edit section *** (Сотрудники.КодСотрудника Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.КодСотрудника Set start)

                // *** End programmer edit section *** (Сотрудники.КодСотрудника Set start)
                this.fКодСотрудника = value;
                // *** Start programmer edit section *** (Сотрудники.КодСотрудника Set end)

                // *** End programmer edit section *** (Сотрудники.КодСотрудника Set end)
            }
        }
        
        /// <summary>
        /// Контакты.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Контакты CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Контакты CustomAttributes)
        [StrLen(255)]
        public virtual string Контакты
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Контакты Get start)

                // *** End programmer edit section *** (Сотрудники.Контакты Get start)
                string result = this.fКонтакты;
                // *** Start programmer edit section *** (Сотрудники.Контакты Get end)

                // *** End programmer edit section *** (Сотрудники.Контакты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Контакты Set start)

                // *** End programmer edit section *** (Сотрудники.Контакты Set start)
                this.fКонтакты = value;
                // *** Start programmer edit section *** (Сотрудники.Контакты Set end)

                // *** End programmer edit section *** (Сотрудники.Контакты Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.ФИО CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.ФИО CustomAttributes)
        [StrLen(255)]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.ФИО Get start)

                // *** End programmer edit section *** (Сотрудники.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Сотрудники.ФИО Get end)

                // *** End programmer edit section *** (Сотрудники.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.ФИО Set start)

                // *** End programmer edit section *** (Сотрудники.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Сотрудники.ФИО Set end)

                // *** End programmer edit section *** (Сотрудники.ФИО Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиE", typeof(IIS.Prilozhenie_1.Сотрудники));
                }
            }
            
            /// <summary>
            /// "СотрудникиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиL", typeof(IIS.Prilozhenie_1.Сотрудники));
                }
            }
        }
    }
}
