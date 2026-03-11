import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'DM Sans', sans-serif;
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 768px) { padding: 16px; }
  @media (max-width: 480px) { padding: 12px; }
`;

export const PageTitle = styled.h2`
  font-family: 'Syne', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 480px) { font-size: 1.1rem; }
`;

export const Section = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 480px) { padding: 16px; }
`;

export const SectionTitle = styled.h3`
  font-family: 'Syne', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 20px;
`;

export const DoctorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 14px;
  margin-bottom: 20px;
  color: white;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    padding: 16px;
    gap: 12px;
  }
`;

export const DoctorAvatarBox = styled.div`
  font-size: 2.2rem;
  width: 60px;
  height: 60px;
  min-width: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const DoctorHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

export const DoctorHeaderName = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: 1rem;
    white-space: normal;
  }
`;

export const DoctorHeaderSpec = styled.div`
  font-size: 0.85rem;
  opacity: 0.75;
`;

export const DoctorHeaderTotal = styled.div`
  margin-left: auto;
  text-align: right;
  flex-shrink: 0;
`;

export const DoctorHeaderCount = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1;

  @media (max-width: 480px) { font-size: 1.8rem; }
`;

export const DoctorHeaderCountLabel = styled.div`
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  opacity: 0.75;
  margin-top: 4px;
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

export const SummaryCard = styled.div`
  background: ${p => p.$bg || '#fff'};
  border: 1px solid ${p => p.$border || '#e2e8f0'};
  padding: 20px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }
`;

export const SummaryIcon = styled.div`
  width: 40px;
  height: 40px;
  background: ${p => p.$iconBg || '#f1f5f9'};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

export const SummaryNumber = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: ${p => p.$color || '#0f172a'};
  line-height: 1;
`;

export const SummaryLabel = styled.div`
  font-size: 0.72rem;
  font-weight: 700;
  color: ${p => p.$color || '#64748b'};
  text-transform: uppercase;
  letter-spacing: 0.6px;
`;

export const PatientTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-sizing: border-box;

  @media (max-width: 600px) {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const PatientTh = styled.th`
  text-align: left;
  padding: 10px 12px;
  font-size: 0.72rem;
  text-transform: uppercase;
  color: #94a3b8;
  border-bottom: 2px solid #f1f5f9;
  letter-spacing: 0.06em;
  white-space: nowrap;
  font-family: 'DM Sans', sans-serif;
`;

export const PatientTr = styled.tr`
  &:hover { background: #f8fafc; }
`;

export const PatientTd = styled.td`
  padding: 14px 12px;
  font-size: 0.875rem;
  color: #475569;
  border-bottom: 1px solid #f1f5f9;
  white-space: nowrap;
`;

export const StatusBadge = styled.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
  background: ${p =>
    p.$status === 'Confirmed' ? '#dcfce7' :
    p.$status === 'Pending'   ? '#fef3c7' : '#dbeafe'};
  color: ${p =>
    p.$status === 'Confirmed' ? '#15803d' :
    p.$status === 'Pending'   ? '#b45309' : '#1d4ed8'};
`;

export const BackBtn = styled.button`
  background: white;
  border: 1px solid #e2e8f0;
  padding: 8px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;

  &:hover {
    background: #f8fafc;
    color: #0f172a;
    border-color: #cbd5e1;
  }
`;

export const EmptySettings = styled.div`
  text-align: center;
  padding: 48px 24px;

  @media (max-width: 480px) { padding: 32px 16px; }
`;

export const EmptyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 12px;
`;

export const EmptyText = styled.h3`
  color: #0f172a;
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem;
  margin: 0 0 8px;
`;

export const EmptySubText = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  margin: 0 0 16px;
  line-height: 1.6;
`;

export const EmptyHint = styled.div`
  display: inline-block;
  margin-top: 4px;
  font-size: 0.8rem;
  color: #6366f1;
  background: #f5f3ff;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
`;