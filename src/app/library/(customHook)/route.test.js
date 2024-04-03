import { render } from "@testing-library/react";
import { useHandleRoute } from "./useRouteHook";

jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

test('useHandleRoute should return a function', () => {
    const TestComponent = () => {
        const handleRoute = useHandleRoute();
        return <div onClick={() => handleRoute('/test')} />;
    }

    const { container } = render(<TestComponent />);
    const divElement = container.firstChild;

    expect(typeof divElement.onclick).toBe('function');
});
