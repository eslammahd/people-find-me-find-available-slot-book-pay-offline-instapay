export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      time_slots: {
        Row: {
          id: string;
          date: string;
          start_time: string;
          end_time: string;
          is_available: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          date: string;
          start_time: string;
          end_time: string;
          is_available?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          date?: string;
          start_time?: string;
          end_time?: string;
          is_available?: boolean;
          created_at?: string;
        };
      };
      bookings: {
        Row: {
          id: string;
          slot_id: string;
          patient_name: string;
          patient_phone: string;
          patient_email: string | null;
          notes: string | null;
          status: string;
          payment_method: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          slot_id: string;
          patient_name: string;
          patient_phone: string;
          patient_email?: string | null;
          notes?: string | null;
          status?: string;
          payment_method?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          slot_id?: string;
          patient_name?: string;
          patient_phone?: string;
          patient_email?: string | null;
          notes?: string | null;
          status?: string;
          payment_method?: string | null;
          created_at?: string;
        };
      };
    };
  };
}
